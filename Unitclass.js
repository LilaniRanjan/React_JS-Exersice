import React, {Component} from 'react'

class Unitclass extends Component{
    render(){
        return(
            <div>
                <h1>My favorit Subject {this.props.name}. It's ID is {this.props.sub_id}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Unitclass;