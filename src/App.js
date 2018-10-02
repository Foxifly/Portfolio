import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <AboutMe/>
        <Education/>
        <Projects/>
      </div>
    );
  }
}

export default App;
