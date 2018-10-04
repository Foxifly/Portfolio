import React, { Component } from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
  render() {
    const {projectList, courseWork} = this.props;
    return (
      <div className="App">
        <NavBar/>
        <AboutMe/>
        <Education courseWork={courseWork}/>
        <Projects projectList={projectList}/>
        <Contact/>
      </div>
    );
  }
}

export default Main;
