import './App.css';
import React from 'react';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';

function App() {
  return (
    <div className="App">
      <Classifier />
      <ImageList />
    </div>

  );
}

export default App;
