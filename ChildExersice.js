import React from 'react'

function Child(props){
    return(
        <div>
            <button onClick={ ()=>props.Event("Rabbit")}>Click</button>
        </div>
    )
}

export default Child    