import React from 'react'

function ReactFracmentList(){
    const List=[ {
        id: 1,
        name: 'Bruce'
    },
    {
        id: 2,
        name: 'Clark'
    }
]
 
return(
    <React.Fragment>
        {
            List.map(name=>(
            <React.Fragment key={name.id}>
                <h1>{name.id},</h1>
                <p>{name.name}</p> 
            </React.Fragment>
            ))
        }
    </React.Fragment>)
}

export default ReactFracmentList