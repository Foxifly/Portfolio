import React, { Component } from 'react';
import Credential from "./Credential"
import "../css/education.css";
import albionLogo from "../img/albion-college-logo.png"

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
      <div className="albion-education-content">
        <h3>Physics Major, Chemistry Minor</h3>
        <img alt="albion college" className="albion-logo" src={albionLogo}/>
        <p>Graduated with a 3.11 GPA. Completed project using the Discovery Channel Telescope in Happy Jack, AZ to collect data on Binary Star Systems. These data were analyzed using command prompt.</p>

        </div>
</div>
    </article>
  )
}
}

export default Education
