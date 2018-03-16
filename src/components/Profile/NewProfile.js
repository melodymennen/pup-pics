import React, {Component} from 'react'
import FileUpload from '../global/FileUpload'
import BreedDropdown from './BreedDropdown'

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

    render() {
        return (
            <div className="NewProfile">
                Profile Picture
                <FileUpload sendUrl={this.sendUrl}/>
                Name {this.state.name}
                <input value={this.state.name} placeholder="Name" className="input" maxLength="20" onChange={e => this.updateName(e.target.value)}/>
                Breed {this.state.breed}
                <BreedDropdown updateBreed={this.updateBreed}/>
                Age {this.state.age}
                <input value={this.state.age} placeholder="Age" className="input" maxLength="2" onChange={e => this.updateAge(e.target.value)}/>                
                Sex {this.state.sex}
                <select value={this.state.sex} className="dropdown" onChange={e => this.updateSex(e.target.value)}>
                    <option value="0" selected>select...</option>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
            </div>
        )
    }
}

export default NewProfile