import React, { Component } from 'react';
import "../css/experience.css";
import Work from "./Work"

class workExperience extends Component {

render() {
    const {workExperience} = this.props;
  return(
    <article className="work-experience">
    <div aria-hidden="true" className="anchor" id="work-experience"></div>
    <div className="title-heading-wrapper">
      <h2>work-experience</h2>
      </div>
      <div className="work-experience-container">
      {
        courseWork.map(course=>{
            return <Credential key={course.key} course={course}/>
        })
      }
</div>
    </article>
  )
}
}

export default workExperience;
