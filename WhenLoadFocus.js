import React, {Component} from 'react'

class WhenLoadFocus extends Component{
    constructor(){
        super()
        this.callRef= React.createRef();
    }

    componentDidMount(){
        this.callRef.current.focus()
    }

    handel=()=>{
        alert(this.callRef.current.value)
    }

    render(){
        return(
            <div>
                <h1>React Ref</h1>
                <input type="text" ref={this.callRef}/>
                <button type="button" value="Load" onClick={this.handel}/>
            </div>
        )
    }
}

export default WhenLoadFocus