import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
