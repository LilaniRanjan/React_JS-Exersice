import React from 'react'

const Mypets= (props) =>{
    const {pet, nickname}= props
    return <div>
         <h1>My pet is {pet} . It's nick name {nickname} . </h1>
    </div>
   
}



    export default Mypets;