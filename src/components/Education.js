import React, { Component } from 'react';
import Credential from "./Credential"
import "../css/education.css";

class Education extends Component {

render() {
    const {courseWork} = this.props;
  return(
    <article className="education">
    <a aria-hidden="true" className="anchor" id="education"></a>
    <div className="title-heading-wrapper">
      <h2>Education</h2>
      </div>
      <div className="education-container">
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

export default Education
