import React from 'react'

function NewPerson({personIn}){
    return(
        <div>
            <h1>I'm {personIn.name}, {personIn.age}</h1>
        </div>
    )
}

export default NewPerson