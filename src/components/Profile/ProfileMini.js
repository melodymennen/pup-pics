import React from 'react'

const ProfileMini = (props) => {
    const photoStyle = {
        backgroundImage: `url(${props.profile_photo})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="ProfileMini" onClick={() => props.changeProfile(props.id)}>
            <div style={photoStyle} className="photo"></div>
            <div><span>{props.name}</span></div>
            <div>{props.breed}</div>
            <div>{props.sex}</div>
            <div>{props.age} years old</div>
        </div>
    )
}

export default ProfileMini