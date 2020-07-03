import React, {Component} from 'react'

class Eventbind extends Component{
    constructor(){
        super()
        this.state={
            Count: 0
        }

        // this.IncrementByFour= this.IncrementByFour.bind(this)
    }

    clickChange(){
        this.setState((prevState) =>({
            Count: prevState.Count + 1
        }),()=> console.log(this.state.Count))
    }

    IncrementByFour=()=>{
        this.clickChange()
        this.clickChange()
        this.clickChange()
        this.clickChange()
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={this.IncrementByFour}>Click</button>
            </div>
        )
    }
}

export default Eventbind