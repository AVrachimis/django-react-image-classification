import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class PostForm extends Component {
    state = {}
    render() {
        return (
            <Form>
                <h3>Write Post</h3>
                <input type='text' className='form-control' />
                <Button variant='info' className='mt-2' >Submit</Button>
            </Form>
        );
    }
}

export default PostForm;