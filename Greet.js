import React from 'react'

const Greet= (props)=>{
    return(
        <div>
            <h1>Hi, My name is {props.name}  . My school is  {props.school}  .</h1>
            {props.children}
        </div>
    )
}

export default Greet;