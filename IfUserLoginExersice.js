import React, {Component} from 'react'

class User extends Component{
    constructor(){
        super()
        this.state={
            UserLogIn: true
        }
    }

    render(){
        if (this.state.UserLogIn){
            return "Hi, Welcome Lilaniya.."
        } else{
            return "Hi, Welcome guest.."
        }
    }
}

export default User