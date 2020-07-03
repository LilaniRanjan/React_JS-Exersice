import React from 'react'
import NewPerson from './NewPersonExample'


function ObjectList(){
    const Objects=[
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 32,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'Javascript'
        }
 
    ]

    var Lists= Objects.map((Person, index)=> <NewPerson key={index} personIn={Person}/>)

    return(
        <div>
            {Lists}
        </div>
    )
}

export default ObjectList