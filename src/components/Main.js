import React, { Component } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import MainLanding from "./MainLanding";

class Main extends Component {
  render() {
    const { courseWork, projectList } = this.props;
    return (
      <main className="App">
        <NavBar />
        <MainLanding />
        <AboutMe />
        <WorkExperience workExperience={workExperience} />
        <Education courseWork={courseWork} />
        <Contact />
        <Projects projectList={projectList} />
        <Footer />
      </main>
    );
  }
}

export default Main;
