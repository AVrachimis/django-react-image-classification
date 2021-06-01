import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';

class ImageList extends Component {
    state = {
        images: [],
    }

    componentDidMount() {
        this.getImages()
    }

    getImages = () => {
        axios.get('http://127.0.0.1:8000/api/images/', {
            headers: {
                'accept': 'application/json'
            }
        }).then(resp => {
            this.setState({ images: resp.data })
            console.log(resp)
        })


    }
    render() {
        const images = this.state.images.map(img => {
            return <Image key={img.id} pict={img.picture} />
        })
        return (
            <div>
                <h1> ImageList</h1 >
                {images}
            </div>
        );
    }
}

export default ImageList;

