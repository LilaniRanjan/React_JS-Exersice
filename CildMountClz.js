import React, {Component} from 'react'

class ChildMountClz extends Component{
    componentWillMount(){
        alert("The component named Header is about to be unmounted")
    }
    render(){
        return(
            <div>
                <h1>Hello, World</h1>
            </div>
        )
    }
}

export default ChildMountClz