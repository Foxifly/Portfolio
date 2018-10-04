import React, { Component } from 'react';
import Project from "./Project";

class Projects extends Component {
render() {
const  {projectList} = this.props;
  return(
    <article className="projects" id="projects">
    <h2>All my things to show off</h2>
        <div className="project-container">
    {
      projectList.map(project => {
          return <Project
          projectInfo={project}
          />
      })
    }
</div>
    </article>
  )


}
}

export default Projects
