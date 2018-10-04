import React, { Component } from 'react';

class Project extends Component {
render() {
  const {projectInfo} = this.props;
  return(

      <div className="project-content">
        <h3>{projectInfo.name}</h3>
      <img src="project-image"/>

    <button className="more-info">More Info</button>
  </div>


  )


}
}

export default Project
