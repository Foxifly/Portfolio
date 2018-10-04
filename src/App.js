import React, { Component } from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import data from "./data/data.json"
import './App.css';

class App extends Component {
  state = {
    projectList: []
  }
  componentWillMount() {
    this.setState({
      projectList: data
    })
  }
  render() {
    const {projectList} = this.state;
    return (
      <div className="App">
        <NavBar/>
        <AboutMe/>
        <Education/>
        <Projects projectList={projectList}/>
        <Contact/>
      </div>
    );
  }
}

export default App;
