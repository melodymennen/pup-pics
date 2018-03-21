import React, {Component} from 'react'
import FileUpload from '../global/FileUpload'
import axios from 'axios'

class AddPhoto extends Component{
    state = {
        url: '', 
        caption: ''
    }

    sendUrl = (url) => {
        this.setState({url})
    }

    updateCaption = (caption) => {
        this.setState({caption})
    }

    addPhoto = () => {
        const body = {
            url: this.state.url, 
            caption: this.state.caption, 
            profile_id: this.props.profile
        }

        axios.post('/api/photos', body).then(() => {
            this.setState({
                url: '', 
                caption: ''
            })
            this.props.changeView('home')
        })
    }

    render() {
        return (
            <div className="AddPhoto">
                <FileUpload sendUrl={this.sendUrl}/>
                <textarea value={this.state.caption} placeholder="Your caption here." className="input" maxLength="140" onChange={e => this.updateCaption(e.target.value)}/>
                <button onClick={this.addPhoto}>Add Photo</button>
            </div>
        )
    }
}

export default AddPhoto