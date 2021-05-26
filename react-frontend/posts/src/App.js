import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';

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
    ]
  }

  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
