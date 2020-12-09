import React from 'react';
//task 1 
//const UniversityCourseStudent = () => {}

function UniversityCourseStudent (prop){

   const name = prop.name
   const studentId = prop.studentId
   const courseName = prop.courseName
   const courseStartDate = prop.courseStartDate

  

    return (
        <div>

            Name = {name}, 
            studentId = {studentId},
            courseName = {courseName},
            courseStartDate = {courseStartDate}
         
        </div>


    );


}

export default UniversityCourseStudent;