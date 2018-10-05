import React, { Component } from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import MainLanding from "./MainLanding";

class Main extends Component {
  render() {
    const {courseWork, projectList} = this.props;
    return (
      <div className="App">

        <NavBar/>
        <MainLanding/>
        <AboutMe/>
        <Education courseWork={courseWork}/>
        <Projects projectList={projectList}/>
        <Contact/>
      </div>
    );
  }
}

export default Main;
