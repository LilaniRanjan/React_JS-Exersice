import React, {Component} from 'react'

class FunctionChange extends Component{
    constructor(){
        super()
        this.state={
            text:""
        }
    }

    ChangeText=(e)=>{
        this.setState({
            text: e.target.value
        })
    }


    render(){
        return(
            <div>
                <label for="CompanyName">Company Name:</label>
                <input id="CompanyName" onChange={this.ChangeText}/>
                <h4>Company Name is: {this.state.text}</h4>
            </div>
        )
    }
}

export default FunctionChange