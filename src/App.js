import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UniversityCourseStudent from './UniversityCourseStudent';
import UniversityCourseModulePanel from './UniversityCourseModulePanel';
import Modules from './Modules';

//task 1, part 1 and part 2 (i think) assessment 2.
const moduleJson = [
  {
      'moduleCode':"CP40046E",
      'moduleName':"CP40046E",
      'courseName':"Programming",
      'startDate':"05.10.20",
      'endDate':"22.02.21",
  },
  {
      'moduleCode':"CP40041E",
      'moduleName':"CP40046E",
      'courseName':"Criminology",
      'startDate':"12.10.20",
      'endDate':"23.02.21",
  },
  {'moduleCode':"CP40067E",
  'moduleName':"CP40046E",
      'courseName':"Bussiness",
      'startDate':"15.10.20",
      'endDate':"17.02.21",
  }
]

const modulesElement = (<div><UniversityCourseStudent name="Bogdan" studentId = "21381698" courseName= "Web Developing" courseStartDate="14/10/2020"/>
<UniversityCourseModulePanel   /><Modules moduleJson={moduleJson}/></div> );

function addCourseForDisplay(jsonvalue) {
  moduleJson.push(jsonvalue);
  console.log(moduleJson);
  ReactDOM.render(modulesElement, document.getElementById('root'));
}

function App() {

  return modulesElement; //de intrebat : I can use this function only one, it wont update twice WHYYYYY!?
}

export default App;
export {addCourseForDisplay};