import React from 'react'

const Header = (props) => {
    return (
        <div className="Header">
            <div className="left button" onClick={() => props.changeView('home')} >
                Pup Pics
            </div>
            {props.user && 
                <div className="right">
                    <div className="button" onClick={() => props.changeView('account')} >
                        Account
                    </div>
                    <div className="button" onClick={() => props.logout()} >
                        Log Out
                    </div>
                </div>
            }
            {props.user === null && 
                <div className="right button" onClick={() => props.changeView('login')} >
                    Sign In/Up
                </div>
            }
        </div>
    )
}

export default Header