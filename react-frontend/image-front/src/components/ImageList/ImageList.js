import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';
import { Button, Spinner } from 'react-bootstrap'
class ImageList extends Component {
    state = {
        images: [],
        visible: 2,
        isLoading: true,
        newLoaded: false,
        status: false,
    }

    componentDidMount() {
        setTimeout(this.getImages, 750)
    }

    getImages = () => {
        axios.get('http://127.0.0.1:8000/api/images/', {
            headers: {
                'accept': 'application/json'
            }
        }).then(resp => {
            this.setState({
                images: resp.data,
                status: true
            })
            console.log(resp)
        })
        this.setState({ isLoading: false })


    }

    handleVisible = () => {
        const visible = this.state.visible
        const new_visible = visible + 2
        this.setState({ newLoaded: true })
        setTimeout(() => {
            this.setState({
                visible: new_visible,
                newLoaded: false,
            })
        }, 300);
    }

    render() {
        const images = this.state.images.slice(0, this.state.visible).map(img => {
            return <Image key={img.id} pict={img.picture} name={img.classified} />
        })
        return (
            <div>
                <h1> List of images</h1 >
                {(this.state.images.length === 0) && (this.state.status) &&
                    <h3>No images classified</h3>
                }
                {this.state.isLoading ?
                    <Spinner animation="border" role="status"></Spinner>
                    :
                    <React.Fragment>
                        {images}
                        {this.state.newLoaded &&
                            <Spinner animation="border" role="status"></Spinner>}
                        <br />
                        {(this.state.images.length > this.state.visible) && (this.state.images.length > 2) &&
                            <Button variant='primary' size='lg' onClick={this.handleVisible}>Load more</Button>
                        }
                        {(this.state.images.length <= this.state.visible) && (this.state.images.length > 0) &&
                            <p>No more images to load</p>}
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default ImageList;

