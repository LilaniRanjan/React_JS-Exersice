import React, {component, Component} from 'react'
import Hellos from './PropsStateHello'

class PropsStateWelcome extends Component{
    constructor(){
        super()
        this.state={
            message: 'React tutorials...'
        }
    }

    render(){
        return(
            <div>
                <Hellos name={this.state.message}/>
            </div>
        )
    }
}

export default PropsStateWelcome;