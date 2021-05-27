import React from 'react';
import { Button } from 'react-bootstrap';

const Post = (props) => {
    return (
        <>



            <h3>{props.post.text}</h3>

            <Button variant='danger' onClick={() => props.delete(props.post.id)}>Delete</Button>
        </>

    );
}

export default Post;