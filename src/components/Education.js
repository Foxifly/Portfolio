import React, { Component } from 'react';
import Credential from "./Credential"

class Education extends Component {

render() {
    const {courseWork} = this.props;
  return(
    <article className="education" id="education">
      <h2>Education</h2>
      <div className="education-container">
      {
        courseWork.map(course=>{
            return <Credential course={course}/>
        })
      }

</div>
    </article>
  )
}
}

export default Education
