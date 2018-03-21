import React from 'react'

const Photo = (props) => {
    const photoStyle = {
        backgroundImage: `url(${props.url})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const timestamp = (timestamp) => {
        const rightNow = new Date().getTime()
        const date = new Date(timestamp)
        const diff = rightNow - timestamp
        const seconds = diff / 1000
        const minutes = seconds / 60 
        const hours = minutes / 60 
        
        return seconds < 60 ? Math.floor(seconds) + 's' : minutes < 60 ? Math.floor(minutes) + 'm' : hours < 24 ? Math.floor(hours) + 'h' : date.toDateString()
    }

    return (
        <div className="Photo">
            <div className="photo" style={photoStyle}></div>
            <div>{props.caption}</div>
            <div>{timestamp(props.timestamp)}</div>
        </div>
    )
}

export default Photo