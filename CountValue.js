import React, {Component} from 'react'

class CountValue extends Component{
    constructor(){
        super()
        this.state={
            Count: 0
        }
    }

    IncrementByOne(){
        this.setState({
            Count: this.state.Count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={()=> this.IncrementByOne()}>AddOne</button>
            </div>
        )
    }
}

export default CountValue
