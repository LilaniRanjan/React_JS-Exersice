import React, {Component} from 'react'

class StateClz extends Component{
    constructor(){
        super()
        this.state={
            message: "Hi, Welcome.. My name is Lilanya.."
        }
    }

    ChangeMessage(){
        this.setState(
            {
                message: "Thank You Guys.."
            }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.ChangeMessage()}>Click</button>
            </div>
        )
    }
}

export default StateClz