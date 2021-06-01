import React, { Component } from 'react';
import axios from 'axios'
class ImageList extends Component {
    state = {}



    componentDidMount() {
        this.getImages()
    }

    getImages = () => {
        axios.get('http://127.0.0.1:8000/api/images/', {
            headers: {
                'accept': 'application/json'
            }
        }).then(resp => {
            console.log(resp)
        })


    }
    render() {
        return (
            <h1>ImageList</h1>
        );
    }
}

export default ImageList;

