import React from 'react';
import App, {addCourseForDisplay} from './App'

//task 2 
function UniversityCourseModulePanel () {

  const [moduleName, setModuleName] = React.useState('ModuleName');
  const [moduleCode, setModuleCode] = React.useState('ModuleCode');
  const [startDate, setStartDate] = React.useState('startDate'); 
  const [endDate, setEndDate] = React.useState('endDate'); 
  const [courseName, setCourseName]= React.useState('CourseName'); 


  
  function clickHandler () {
  

  //create a json, PRIMESC EROARE CA E DETERMINATA DAR NU FOLOSITA
    const jsonvalue= {
          'moduleCode':moduleCode,
          'moduleName': moduleName,
          'startDate': startDate,
          'endDate': endDate, 
          'courseName':courseName
          
    }
   
    window.alert("Module Name =  " + moduleName); 

    addCourseForDisplay(jsonvalue);
  }

 
//PROBLEME AICI JOS, IMI DA O EROARE CUM CA NU E FUNCTIE DUPA CE SCRIU CEVA IN FIECARE BARA;
  return (
    
    <div>
      
      <input  type="text" placeholder="module name" value={moduleName}  onChange= { e => setModuleName(e.target.value) } ></input>
      <input  type="text" placeholder="module code" value={moduleCode}  onChange= { e => setModuleCode(e.target.value) } ></input>
      <input  type="text" placeholder="start date" value={startDate}  onChange= { e => setStartDate(e.target.value) } ></input>
      <input  type="text" placeholder="end date" value={endDate}  onChange= { e => setEndDate(e.target.value) } ></input>
      <input  type="text" placeholder="course name" value={courseName}  onChange= { e => setCourseName(e.target.value) } ></input>




      <button onClick = {clickHandler} >Show</button>
    </div>
  );//part 2 and 3 

  }


export default UniversityCourseModulePanel;