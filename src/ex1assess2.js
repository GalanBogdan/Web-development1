import React from 'react';

//this is the example for ex 1 from assessment 2.
function Person(props){

 const firstname= props.firstname;
 const lastname= props.lastname;

   return(
      <div>
          Firstname = {firstname},Lastname = {lastname}
      </div>
    );


}

export default Person;