import React, {Component} from 'react'

class Increment extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.IncrementBy_1=this.IncrementBy_1.bind(this)
    }

    IncrementBy_1(){
        this.setState((prevState)=>({
            count: prevState.count + 3
        }))
    }

    // IncrementBy_3(){
    //     this.IncrementBy_1()
    //     this.IncrementBy_1()
    //     this.IncrementBy_1()
    // }


    render(){
        return(
            <div>
                <h1>Counter- {this.state.count}</h1>
                <button onClick={this.IncrementBy_1}>IncrementBy_3</button>
            </div>
        )
    }
}

export default Increment