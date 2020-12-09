import './App.css';
import React from 'react';
import UniversityCourseStudent from './UniversityCourseStudent';
import UniversityCourseModulePanel from './UniversityCourseModulePanel';
import Modules from './Modules';

//task 1, part 1 and part 2 (i think) assessment 2.

function App() {
  return (
    <div>
      <UniversityCourseStudent name="Bogdan" studentId = "21381698" courseName= "Web Developing" courseStartDate="14/10/2020"/>
      <UniversityCourseModulePanel   />
      <Modules/> 
    </div>
  );
}

export default App;

