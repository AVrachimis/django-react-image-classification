import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import { Container } from 'react-bootstrap'
import cuid from 'cuid'
import StarWars from './components/StarWars/StarWars';

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

  addPost = (text) => {
    console.log('create ' + text)
    const new_post = {
      id: cuid(),
      text: text,
    }
    const posts = [...this.state.posts, new_post]
    this.setState({ posts })
  }

  deletePostHandler = (id) => {
    console.log(id)
    let posts = [...this.state.posts]
    posts = posts.filter(post => post.id !== id)
    this.setState({ posts })
  }

  render() {
    return (
      <Container>
        <PostForm add={this.addPost} />

        <hr />

        <PostList
          posts={this.state.posts}
          status={this.state.showPosts}
          show={this.showPostsHandler}
          delete={this.deletePostHandler}
        />

        <hr />
        <StarWars />
      </Container>

    );
  }
}

export default App;
