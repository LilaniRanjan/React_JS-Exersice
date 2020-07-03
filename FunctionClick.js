import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log("Button Clicked")

    }


    return(
        <button onClick={clickHandler}>Call</button>
    )
} 

export default FunctionClick