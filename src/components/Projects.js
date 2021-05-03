import React, { Component } from "react";
import Project from "./Project";
import "../css/projects.css";

class Projects extends Component {
  render() {
    const { projectList } = this.props;
    const { currProjectList } = this.props;
    return (
      <article className="projects">
      <div aria-hidden="true" className="anchor" id="projects"></div>
      <div className="title-heading-wrapper">
        <h2>Current Projects</h2>
        <div className="project-container">
          {currProjectList.map(project => {
            return <Project key={project.name} projectInfo={project} />;
          })}
        </div>
        <h2>Older Projects</h2>
        </div>
        <div className="project-container">
          {projectList.map(project => {
            return <Project key={project.name} projectInfo={project} />;
          })}
        </div>
      </article>
    );
  }
}

export default Projects;
