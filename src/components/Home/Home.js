import React, { Component } from 'react'
import Photo from '../Photos/Photo'
import axios from 'axios'

class Home extends Component {
    state = {
        photos: []
    }

    componentDidMount(){
        this.getPhotos()
    }

    getPhotos = () => {
        axios.get('/api/photos').then(response => {
            this.setState({photos: response.data})
        })
    }

    render() {
        const photos = this.state.photos.map(item => {
            return (
                <Photo key={item.id}
                    url={item.url}
                    timestamp={item.timestamp}
                    caption={item.caption}
                    name={item.name}
                    profilePhoto={item.profile_photo}
                    profileId={item.profile_id}
                    changeProfile={this.props.changeProfile}
                />
            )
        })
        return (
            <div className="Home">
                {photos}
            </div>
        )
    }
}

export default Home