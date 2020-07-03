import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1> Welcome to {this.props.program} . This is a {this.props.library} library .</h1>
    }
}

export default Welcome;