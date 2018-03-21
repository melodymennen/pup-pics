import React from 'react'

const ProfileMini = (props) => {
    const photoStyle = {
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        backgroundImage: `url(${props.profile_photo})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="ProfileMini">
            <div style={photoStyle}></div>
            <div>{props.name}</div>
            <div>{props.breed}</div>
            <div>{props.sex}</div>
            <div>{props.age} years old</div>
        </div>
    )
}

export default ProfileMini