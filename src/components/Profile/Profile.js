import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
    state = {
        profile: {}
    }

    componentDidMount(){
        this.getProfile()
    }

    getProfile = () => {
        axios.post('/api/singleprofile', {id: this.props.profile}).then(response => {
            this.setState({profile: response.data[0]})
        })
    }

    render(){
        const { profile_photo, name, breed, age, sex } = this.state.profile
        return (
            <div className="Profile">
                <img src={profile_photo} alt={name} className="photo"/>
                <div>{name}</div>
                <div>{breed}</div>
                <div>{sex}</div>
                <div>{age} years old</div>
                <button onClick={() => this.props.changeAcctView('add photo')}>Add a photo of {name}</button>
            </div>
        )
    }
}

export default Profile