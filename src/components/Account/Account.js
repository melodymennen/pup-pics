import React, { Component } from 'react'
import NewProfile from '../Profile/NewProfile'
import AddPhoto from '../Photos/AddPhoto'
import Profile from '../Profile/Profile'
import ProfileList from './ProfileList'
import axios from 'axios'

class Account extends Component {
    state = {
        view: 'account',
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

    changeAcctView = (input) => {
        this.setState({view: input})
    }

    render() {
        const { view, profiles, currentProfile } = this.state
        return (
            <div className="Account">
                {this.state.view}
                {
                view === 'account' ? <ProfileList changeAcctView={this.changeAcctView} profiles={profiles} changeProfile={this.props.changeProfile}/> : 
                view === 'new profile' ? <NewProfile changeAcctView={this.changeAcctView}/> : 
                view === 'view' ? <component /> : null}
            </div>
        )
    }
}

export default Account