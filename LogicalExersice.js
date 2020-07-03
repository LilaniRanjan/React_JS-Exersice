import React, {Component} from 'react'

class Logical extends Component{
    constructor(){
        super()
        this.state={
            LogicalOperator: true
        }
    }

    render(){
        return(
            <div>
                {this.state.LogicalOperator && <h1>WelCome, Guys..</h1>}
            </div>
        )
    }
}

export default Logical