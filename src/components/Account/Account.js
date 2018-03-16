import React, {Component} from 'react'
import axios from 'axios'

class Account extends Component{
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
                <div key={item.id}>
                    <img src={item.profile_photo} alt={item.name}/>
                    {item.name}
                    {item.breed}
                    {item.sex}
                    {item.age}
                </div>
            )
        })
        return (
            <div className="Account">
                <button onClick={() => this.props.changeView('new profile')}>Add a dog</button> 
                {this.state.profiles}
                {profiles}
            </div>
        )
    }
}

export default Account