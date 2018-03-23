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
        <div className="ProfileMini button" onClick={() => props.changeProfile(props.id)}>
            <div style={photoStyle}></div>
            <div><span>{props.name}</span></div>
            <div>{props.breed}</div>
            <div>{props.sex}</div>
            <div>{props.age} years old</div>
        </div>
    )
}

export default ProfileMini