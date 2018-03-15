import React from 'react'

const Login = (props) => {
    return (
        <div className="Login">
            {props.inputFields}
            <button onClick={() => props.login()}> Log In </button>
            <button onClick={() => props.register()}> Sign Up </button>
        </div>
    )
}

export default Login