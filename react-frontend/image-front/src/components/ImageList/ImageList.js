import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';
import { Button } from 'react-bootstrap'
class ImageList extends Component {
    state = {
        images: [],
        visible: 2,
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

    handleVisible = () => {
        const visible = this.state.visible
        const new_visible = visible + 2
        this.setState({ visible: new_visible })
    }

    render() {
        const images = this.state.images.slice(0, this.state.visible).map(img => {
            return <Image key={img.id} pict={img.picture} name={img.classified} />
        })
        return (
            <div>
                <h1> ImageList</h1 >
                {images}
                <Button variant='primary' size='lg' onClick={this.handleVisible}>Load more</Button>
            </div>
        );
    }
}

export default ImageList;

