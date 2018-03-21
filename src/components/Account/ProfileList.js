import React, { Component } from 'react'
import ProfileMini from '../Profile/ProfileMini'

class ProfileList extends Component {

    render() {
        const profiles = this.props.profiles.map(item => {
            return (
                <ProfileMini key={item.id}
                    name={item.name}
                    breed={item.breed}
                    sex={item.sex}
                    age={item.age} 
                    profile_photo={item.profile_photo}
                    id={item.id}
                    changeProfile={this.props.changeProfile}
                />
            )
        })
        return (
            <div className="ProfileList">
                {profiles}
                <div className="button" onClick={() => this.props.changeAcctView('new profile')}>
                    <i className="fas fa-plus"></i>
                    Add a dog
                </div> 
            </div>
        )
    }
}

export default ProfileList