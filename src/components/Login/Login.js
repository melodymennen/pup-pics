import React from 'react'

const Login = (props) => {
    return (
        <div className="Login">
            {props.inputFields}
            <div className="button login" onClick={() => props.login()}> Log In </div>
            <div className="button signup" onClick={() => props.register()}> Sign Up </div>
        </div>
    )
}

export default Login