import React from 'react';
import axios from 'axios';


function HelloPanel(){
    function fetchData(){
        axios 
        .get("http://localhost:8080/hello")
        .then( function(respons){
            var message = response.data;
            window.alert(message);
         }
        );

    }
    function clickHandler(){
        fetchData();
    }

    return(
        <div>
            <button on click={clickHandler}>Show message from Server </button>
        </div>
    );
}

export default HelloPanel;