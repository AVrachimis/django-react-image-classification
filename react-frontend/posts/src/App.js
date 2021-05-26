import React, { Component } from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';

class App extends Component {
  state = {
    text: 'Hello World from the state'
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>

        {this.state.text ?
          <Button variant='primary' size='lg'>Test Button</Button>
          :
          <Button variant='danger' size='lg'>Test Button 2</Button>
        }

        <Card>Hi there</Card>
      </div>
    );
  }
}

export default App;
