import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Classifier.css';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios'
class Classifier extends Component {
    state = {
        files: [],
        isLoading: false
    }


    // componentDidMount() {
    //     this.getImages()
    // }

    // getImages = () => {
    //     axios.get('http://127.0.0.1:8000/api/images/', {
    //         headers: {
    //             'accept': 'application/json'
    //         }
    //     }).then(resp => {
    //         console.log(resp)
    //     })


    // }



    onDrop = (files) => {
        this.setState({
            isLoading: true
        })
        this.loadingImage(files)
    }

    loadingImage = (files) => {
        setTimeout(() => {
            this.setState({
                files,
                isLoading: false
            }, () => {
                console.log(this.state.files[0].name)
            })
        }, 1000);
    }


    sendImage = () => {
        let formData = new FormData()
        formData.append('picture', this.state.files[0], this.state.files[0].name)
        axios.post('http://127.0.0.1:8000/api/images/', formData, {
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            }
        })
            .then(resp => {
                console.log(resp)
            })
    }



    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));

        return (
            <Dropzone onDrop={this.onDrop} accept='image/png, image/jpeg'>
                {({ isDragActive, getRootProps, getInputProps }) => (
                    <section className="container">
                        <div {...getRootProps({ className: 'dropzone back' })}>
                            <input {...getInputProps()} />
                            <i className="far fa-images mb-2 text-muted" style={{ fontSize: 100 }}></i>
                            <p className='text-muted'>{isDragActive ? "Drop some images" : "Drag 'n' drop some files here, or click to select files"}</p>
                        </div>
                        <aside>
                            {files}
                        </aside>
                        {this.state.files.length > 0 &&
                            <Button variant='info' size='lg' className='mt-3' onClick={this.sendImage}>Select Image</Button>
                        }
                        {this.state.isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>}
                    </section>
                )}
            </Dropzone>
        );
    }
}

export default Classifier;