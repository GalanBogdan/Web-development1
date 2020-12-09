import React from 'react';

//task 2 
function UniversityCourseModulePanel () {

  const [moduleName, setModuleName, moduleCode, setModuleCode, setEndDate, endDate, courseName, setCourseName ] = React.useState(''); 

  const list = [moduleName, moduleCode, endDate,courseName];//AICI NU S TIU SIGUR DACA E BINE

  

  function clickHandler () {

  //create a json, PRIMESC EROARE CA E DETERMINATA DAR NU FOLOSITA
    const jsonvalue= {
          'moduleCode':moduleCode,
          'moduleName': moduleName,
          'endDate': endDate, 
          'courseName':courseName
          
    }

  

    window.alert("Module Name =  " + moduleName);
  }
//PROBLEME AICI JOS, IMI DA O EROARE CUM CA NU E FUNCTIE DUPA CE SCRIU CEVA IN FIECARE BARA;
  return (
    
    <div>
        
     <input  type="text" placeholder="module name" value={moduleName}  onChange= { e => setModuleName(e.target.value) } ></input>
     <input  type="text" placeholder="module code" value={moduleCode}  onChange= { e => setModuleCode(e.target.value) } ></input>
     <input  type="text" placeholder="end date" value={endDate}  onChange= { e => setEndDate(e.target.value) } ></input>
     <input  type="text" placeholder="course name" value={courseName}  onChange= { e => setCourseName(e.target.value) } ></input>


      <button onclick = {clickHandler} >Show</button>
    </div>
  );//part 2 and 3 


}

export default UniversityCourseModulePanel;