import React from 'react'

const Unitfunc=(Props) =>{
    return (
        <div>

            <h1>My favorite subject is {Props.name}. It's ID is {Props.sub_id}</h1>
            {Props.children}

        </div>
    )
}


export default Unitfunc;