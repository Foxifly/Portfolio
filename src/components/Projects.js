import React, { Component } from "react";
import Project from "./Project";
import "../css/projects.css";

class Projects extends Component {
  render() {
    const { projectList } = this.props;
    return (
      <article className="projects">
      <a aria-hidden="true" className="anchor" id="projects"></a>
      <div className="title-heading-wrapper">
        <h2>Projects</h2>
        </div>
        <div className="project-container">
          {projectList.map(project => {
            return <Project projectInfo={project} />;
          })}
        </div>
      </article>
    );
  }
}

export default Projects;
