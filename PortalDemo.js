import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>, document.getElementById('Portal demo')
    )
}

export default PortalDemo