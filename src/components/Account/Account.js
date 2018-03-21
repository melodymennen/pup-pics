import React, { Component } from 'react'
import ProfileMini from '../Profile/ProfileMini'
import axios from 'axios'

class Account extends Component {
    state = {
        profiles: []
    }

    componentDidMount(){
        this.getProfiles()
    }

    getProfiles = () => {
        axios.get('/api/profiles').then(response => {
            this.setState({profiles: response.data})
        })
    }

    render() {
        
        const profiles = this.state.profiles.map(item => {
            return (
                <ProfileMini key={item.id}
                    name={item.name}
                    breed={item.breed}
                    sex={item.sex}
                    age={item.age} 
                    profile_photo={item.profile_photo}
                />
            )
        })
        return (
            <div className="Account">
                {profiles}
                <div className="button" onClick={() => this.props.changeView('new profile')}>
                    <i class="fas fa-plus"></i>
                    Add a dog
                </div> 
            </div>
        )
    }
}

export default Account