import React, { Component } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import MainLanding from "./MainLanding";

class Main extends Component {
  render() {
    const { courseWork, projectList, workExperience } = this.props;
    return (
      <main className="App">
        <NavBar />
        <MainLanding />
        <AboutMe />
        <WorkExperience workExperience={workExperience} />
        <Contact />
        <Education courseWork={courseWork} />
        <Skills/>
        <Projects projectList={projectList} />
        <Footer />
      </main>
    );
  }
}

export default Main;
