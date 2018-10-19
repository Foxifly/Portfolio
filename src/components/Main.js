import React, { Component } from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
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
        <Contact/>
        <Projects projectList={projectList}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
