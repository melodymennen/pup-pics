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
            this.props.changeAcctView('account')
        })
    }

    render() {
        return (
            <div className="NewProfile">
                <FileUpload sendUrl={this.sendUrl}/>
                <input value={this.state.name} placeholder="Name" className="input" maxLength="20" onChange={e => this.updateName(e.target.value)}/>
                <BreedDropdown updateBreed={this.updateBreed}/>
                <input value={this.state.age} placeholder="Age" className="input" maxLength="2" onChange={e => this.updateAge(e.target.value)}/>                
                <div>
                    <div className={this.state.sex === 'male' ? "selected" : "not-selected"} onClick={e => this.updateSex('male')}>Male</div>
                    <div className={this.state.sex === 'female' ? "selected" : "not-selected"} onClick={e => this.updateSex('female')}>Female</div>
                </div>
                <div className="button" onClick={this.createProfile}>Create Profile</div>
            </div>
        )
    }
}

export default NewProfile