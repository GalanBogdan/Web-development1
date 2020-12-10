//task 3 
import React from 'react';

function Modules (props){

//AICI E VORBA DE TASK 3 UNDE NU INTELEG FOARTE BINE CERINTA
    
    const moduleJson = props.moduleJson;

    const moduleList = moduleJson.map( (item) => 
    <li> {item.moduleCode} {item.moduleName} {item.courseName} {item.startDate} {item.endDate}   </li>

    );


    return(
        <div>

         {moduleList}

        </div>


    );

}

export default Modules;
