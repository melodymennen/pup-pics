import React, { Component } from 'react'
import Photo from '../Photos/Photo'
import axios from 'axios'

class Profile extends Component {
    state = {
        profile: {}, 
        photos: []
    }

    componentDidMount(){
        this.getProfile()
        this.getPhotos()
    }

    getProfile = () => {
        axios.post('/api/singleprofile', {id: this.props.profile}).then(response => {
            this.setState({profile: response.data[0]})
        })
    }

    getPhotos = () => {
        axios.post('/api/photosperpet', {id: this.props.profile}).then(response => {
            this.setState({photos: response.data})
        })
    }

    render(){
        const { profile_photo, name, breed, age, sex } = this.state.profile
        const photos = this.state.photos.map(item => {
            return (
                <Photo key={item.id}
                    url={item.url}
                    timestamp={item.timestamp}
                    caption={item.caption}
                />
            )
        })
        return (
            <div className="Profile">
                <img src={profile_photo} alt={name} className="photo"/>
                <div>{name}</div>
                <div>{breed}</div>
                <div>{sex}</div>
                <div>{age} years old</div>
                <button onClick={() => this.props.changeAcctView('add photo')}>Add a photo of {name}</button>
                {photos}
            </div>
        )
    }
}

export default Profile