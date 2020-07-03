import React, {Component} from 'react'

class  UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: false
        }
    }

    render(){
        return(
            <div>
                {this.state.isLoggedIn? (<h1>Hi, How are you..</h1>) : (<h1>Who are you..</h1>)}
            </div>
        )
    }
}

export default UserGreeting