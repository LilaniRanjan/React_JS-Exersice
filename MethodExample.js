import React from 'react'
import Child from './ChildExersice'




class Method extends React.Component{
    constructor() {
        super()
        this.state={
            ParentName: 'Parent'
        }
    }

    Methods=(name)=>{
        alert(`Hello, ${this.state.ParentName} ${name}`)
    }

    render(){
        return(
            <div>
               <Child Event={this.Methods}/>
            </div>
        )
    }
}

export default Method