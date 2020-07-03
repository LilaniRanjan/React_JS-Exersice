import React, {Component} from 'react'

class Destructuringclass extends Component{
    render(){
        const {name, colour}= this.props
        return(
            <div>
                <h1>My favorit pet {name}. It's colour {colour}</h1>
            </div>
        )
    }
}

export default Destructuringclass;