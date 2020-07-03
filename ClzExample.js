import React, {Component} from 'react'
import Message from './Message'
import LogIn from './LogInExamples'
import LogOut from './LogOutExamples'

class ClzExamples extends Component{
    constructor(){
        super()
        this.state={
            IsLogIn: false
        }
    }

    HandelLogIn= () =>{
        this.setState({
            IsLogIn: true
        })
    }

    HandelLogOut= () =>{
        this.setState({
            IsLogIn: false
        })
    }

    render(){
        return(
            <div>
                <Message IsLogInUser={this.state.IsLogIn}/>
                {
                    this.state.IsLogIn ? (<LogOut Events={this.HandelLogOut}/>) : (<LogIn EventHandel={this.HandelLogIn}/>)
                }
            </div>
        )
    }
}

export default ClzExamples