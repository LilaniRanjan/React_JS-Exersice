import React, {Component} from 'react'

class Hellos extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <h1>welcome to {this.props.name}</h1>
            </div>
        )
    }
}

export default Hellos;