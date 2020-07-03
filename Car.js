// import React, {Component} from 'react';
import React, { Component } from 'react'; 


// class Car {
//     constructor (name){
//         this.brand = name;
//     }



//     getBrand(){
//         return "I have " + this.brand;
//     }
// }




// class Car extends React.Component{
//     render(){
//         return <h2>Hi, I am a Car!</h2>
//     }
// }



class Car extends Component{
    render(){
        return(
            <div>
                <h2>I am a {this.props.brand.model}!</h2>

            </div>
        )
    }
}



export default Car;