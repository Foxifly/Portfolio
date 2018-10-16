import React, { Component } from 'react';

class Project extends Component {
render() {
  const {projectInfo} = this.props;
  return(

      <div className="project-content">
      <div
      style={{
        width: '100%',
        height: 200,
        backgroundImage: `url(${projectInfo.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
       className="project-image"/>
        <h3>{projectInfo.name}</h3>


    <button className="more-info">More Info</button>
  </div>


  )


}
}

export default Project
