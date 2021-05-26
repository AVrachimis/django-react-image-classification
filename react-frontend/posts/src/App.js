import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { Container } from 'react-bootstrap'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        text: 'Hello World'
      },
      {
        id: 2,
        text: 'Hello again'
      },
      {
        id: 3,
        text: 'Bye'
      }
    ],

    showPosts: false

  }

  showPostsHandler = () => {
    const show = this.state.showPosts
    this.setState({ showPosts: !show })
  }

  render() {
    return (
      <Container>
        <PostForm />
        <hr />
        <PostList posts={this.state.posts} status={this.state.showPosts} show={this.showPostsHandler} />
      </Container>

    );
  }
}

export default App;
