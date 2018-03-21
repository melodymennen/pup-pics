import React, { Component } from 'react'
import NewProfile from '../Profile/NewProfile'
import AddPhoto from '../Photos/AddPhoto'
import Profile from '../Profile/Profile'
import ProfileList from './ProfileList'
import axios from 'axios'

class Account extends Component {
    state = {
        view: 'account',
        profiles: [], 
        currentProfile: null
    }

    componentDidMount(){
        this.getProfiles()
    }

    getProfiles = () => {
        axios.get('/api/profiles').then(response => {
            this.setState({profiles: response.data})
        })
    }

    changeView = (input) => {
        this.setState({view: input})
    }

    changeProfile = (input) => {
        this.setState({
            currentProfile: input, 
            view: 'profile'
        })
    }

    render() {
        const { view, profiles, currentProfile } = this.state
        return (
            <div className="Account">
                {this.state.view}
                {
                view === 'account' ? <ProfileList changeView={this.changeView} profiles={profiles} changeProfile={this.changeProfile}/> : 
                view === 'new profile' ? <NewProfile changeView={this.changeView}/> : 
                view === 'add photo' ? <AddPhoto changeView={this.changeView} profile={currentProfile}/> : 
                view === 'profile' ? <Profile changeView={this.changeView} profile={currentProfile}/> : 
                view === 'view' ? <component /> : null}
            </div>
        )
    }
}

export default Account