import React, {Component} from 'react'
import { render } from '@testing-library/react';

class RefsDemo extends Component{
    constructor(){
        super()
        this.callRef = React.createRef();
    }

    addRef=()=>{
        this.callRef.current.focus()
    }

    render(){
        return(
            <div>
                <h1>Ref Demo</h1>
                <input type="text" ref={this.callRef}/>
                <button type="button" value="Add text" onClick={this.addRef}/>
            </div>
        )
    }
}

export default RefsDemo