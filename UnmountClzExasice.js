import React, {Component} from 'react'
import ChildMountClz from './CildMountClz'

class UnmountClz extends Component{
    constructor(){
        super()
        this.state={
            show: true
        }
    }

    HandelDeleteHeader= ()=>{
        this.setState({
            show: false
        })
    }

    render(){
        let myHeader
        if(this.state.show){
            myHeader= <ChildMountClz/>
        }

        return(
            <div>
                {myHeader}
                <button onClick={this.HandelDeleteHeader}>Delete</button>
            </div>
        )
    }
}

export default UnmountClz