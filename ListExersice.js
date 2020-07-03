import React from 'react'

function ListExersice(){
    const List=[1, 2, 3, 4, 5]

    var Mulity= List.map((Num)=>{
        return Num * 5
    })

    console.log(Mulity)

    return(
        <div>
            {Mulity} 
        </div>
    )
}

export default ListExersice