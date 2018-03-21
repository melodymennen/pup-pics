import React, {Component} from 'react'
import FileUpload from '../global/FileUpload'
import BreedDropdown from './BreedDropdown'
import axios from 'axios'

class NewProfile extends Component{
    state = {
        url: '', 
        name: '',
        breed: '',
        age: '', 
        sex: ''
    }

    sendUrl = (url) => {
        this.setState({url})
    }

    updateName = (name) => {
        this.setState({name})
    }

    updateBreed = (breed) => {
        this.setState({breed})
    }

    updateAge = (age) => {
        this.setState({age})
    }

    updateSex = (sex) => {
        this.setState({sex})
    }

    createProfile = () => {
        const body = {
            name: this.state.name,
            breed: this.state.breed,
            age: this.state.age,
            sex: this.state.sex,
            url: this.state.url
        }

        axios.post('/api/profiles', body).then(() => {
            this.setState({
                name: '',
                breed: '',
                age: '',
                sex: '',
                url: ''
            })
            this.props.changeView('account')
        })
    }

    render() {
        return (
            <div className="NewProfile">
                Profile Picture
                <FileUpload sendUrl={this.sendUrl}/>
                Name 
                <input value={this.state.name} placeholder="Name" className="input" maxLength="20" onChange={e => this.updateName(e.target.value)}/>
                Breed 
                <BreedDropdown updateBreed={this.updateBreed}/>
                Age 
                <input value={this.state.age} placeholder="Age" className="input" maxLength="2" onChange={e => this.updateAge(e.target.value)}/>                
                Sex 
                <select value={this.state.sex} className="dropdown" onChange={e => this.updateSex(e.target.value)}>
                    <option value="0" selected>select...</option>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
                <button onClick={this.createProfile} >Create Profile</button>
            </div>
        )
    }
}

export default NewProfile