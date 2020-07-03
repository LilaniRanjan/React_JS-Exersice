import React from 'react'

function NameList(){

    // const List=['Blue', 'Red', 'Pink', 'Green']

    // return(
    //     <div>
    //         {
    //             List.map((name)=> <h1>{name}</h1>)
    //         }
    //     </div>
    // )

    const List=['Blue', 'Red', 'Pink', 'Green']
    var Colour= List.map((Name)=> <h1>{Name}</h1>)

    return(
        <div>
            {Colour}
        </div>
    )
}

export default NameList