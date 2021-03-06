import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;