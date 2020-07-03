import React from 'react'
import './StyleSheetExample.css'

function Stylesheet(props){
    let Name= props.primary ? 'primary' : ''
    return(
        
        <div>
            <h1 className={`${Name} fon-xl`}>My syle sheet</h1>
        </div>
    )
}

export default Stylesheet