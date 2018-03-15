import React from 'react'

const Header = (props) => {
    return (
        <div className="Header">
            <div className="left" onClick={() => props.changeView('home')} >
                Pup Pics
            </div>
            {props.user && 
                <div className="right" onClick={() => props.changeView('account')} >
                    Account
                </div>
            }
            {props.user === null && 
                <div className="right" onClick={() => props.changeView('login')} >
                    Sign In/Up
                </div>
            }
        </div>
    )
}

export default Header