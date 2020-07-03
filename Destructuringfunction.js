import React from 'react'


const DestructuringFunction_1 = ({name, heroName}) =>{
    return(
        <div>
            <h1> name is {name}. hero name is {heroName}</h1>
        </div>
    )
}


const DestructuringFunction_2 = (props)=>{
    const {name, heroName}= props
    return(
        <div>
            <h1> name is {name}. hero name is {heroName}</h1>
        </div>
    )
}

export {DestructuringFunction_1, DestructuringFunction_2};