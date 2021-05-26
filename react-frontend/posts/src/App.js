import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    text: 'Hello World from the state'
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
