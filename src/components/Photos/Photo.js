import React from 'react'

const Photo = (props) => {
    const photoStyle = {
        backgroundImage: `url(${props.url})`
    }
    const profilePhoto = {
        backgroundImage: `url(${props.profilePhoto})`
    }

    const timestamp = (timestamp) => {
        const rightNow = new Date().getTime()
        const date = new Date(+timestamp)
        const diff = rightNow - timestamp
        const seconds = diff / 1000
        const minutes = seconds / 60 
        const hours = minutes / 60 
        
        return seconds < 60 ? Math.floor(seconds) + 's' : minutes < 60 ? Math.floor(minutes) + 'm' : hours < 24 ? Math.floor(hours) + 'h' : date.toDateString()
    }

    return (
        <div className="Photo">
        <div className="photo-container">
            <div className="profile-info" ><div className="profile-photo" style={profilePhoto}></div> <span>{props.name}</span></div>
            <div className="photo" style={photoStyle}></div>
            <div>{props.caption}</div>
            <div>{timestamp(props.timestamp)}</div>
        </div>
        </div>
    )
}

export default Photo