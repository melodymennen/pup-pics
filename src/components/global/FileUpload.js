import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

class FileUpload extends Component {

    onDrop = (files) => {
        request
        .post('/upload')
        .attach('image', files[0])
        .end((error, response) => {
            if (error) {
                console.log('on drop error',error)
                alert('File Not Uploaded')
            } else {
                alert('File Uploaded Succesfully')
                console.log('File Uploaded Succesfully')
                console.log(response.text)
                this.props.sendUrl(response.text)
            }
        })
    }

    render(){
        return(
            <div className="FileUpload">
                <Dropzone onDrop={ this.onDrop } multiple={ false } className="dropzone input big-input" >
                    <div className="droptext">Drop a file here, or click to select a file to upload.</div>
                    <div><i className="far fa-images"></i></div>
                </Dropzone>
            </div>
        )
    }
}

export default FileUpload