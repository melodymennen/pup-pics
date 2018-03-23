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
        console.log(this.state.photos)
        const photos = this.state.photos.map(item => {
            return (
                <Photo key={item.id}
                    url={item.url}
                    timestamp={item.timestamp}
                    caption={item.caption}
                    name={item.name}
                    profilePhoto={item.profile_photo}
                    profileId={item.profile_id}
                    changeView={this.props.changeView}
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