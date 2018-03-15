import React, {Component} from 'react'
import FileUpload from '../global/FileUpload'

class NewProfile extends Component{
    render() {
        return (
            <div className="NewProfile">
                Profile Picture
                <FileUpload />
                Name
                Breed
                Age
                Sex
            </div>
        )
    }
}

export default NewProfile