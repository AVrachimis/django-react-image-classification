import './App.css';
import React from 'react';
import Classifier from './components/Classifier/Classifier';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Classifier />
      <ImageList />
    </div>

  );
}

export default App;
