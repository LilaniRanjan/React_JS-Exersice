import React from 'react'

function Message({IsLogInUser}){
    return (
        <div>
            {IsLogInUser ? <h1>Welcome back</h1> : <h1>Plz, LogIn first</h1>}
        </div>
    )
}

export default Message