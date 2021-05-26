import React from 'react';
import Post from './Post';

const PostList = (props) => {
    return (
        <>
            <h1>Post List here!</h1>
            {props.posts.map(post => {
                return <Post post={post} />
            })}

        </>
    );
}

export default PostList;