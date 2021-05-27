import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class PostForm extends Component {
    state = {
        post: '',
    }

    postChangeHandler = (e) => {
        console.log(e.target.value)
        this.setState({ post: e.target.value })
    }

    createPostHandler = (e) => {
        e.preventDefault()
        alert('Submitted')
        const post = this.state.post

        if (post.length > 3) {
            console.log('click')
            this.props.add(post)
            this.setState({ post: '' })
        }
    }

    render() {
        return (
            <Form onSubmit={this.createPostHandler}>
                <h3>Write Post</h3>
                <input type='text' className='form-control' value={this.state.post} onChange={this.postChangeHandler} />
                <Button type='submit' variant='info' className='mt-2' >Submit</Button>
            </Form>
        );
    }
}

export default PostForm;