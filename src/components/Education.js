import React, { Component } from 'react';

class Education extends Component {
render() {
  return(
    <article className="education" id="education">
      <h2>Edumucation</h2>
      <div className="education-container">
        <div className="education-content">
          <h3>Udacity</h3>
          <h4>Front End Development</h4>
          <p>Nanodegree scholarship obtained through Grow with Google April 2018. Estimated to be complete October 2018.</p>
          <button className="more-info">More Info</button>
        </div>

        <div className="education-content">
          <h3>Codecademy</h3>
          <h4>Building Web Apps</h4>
          <p>Learned how to develop interactive front-end applications using JavaScript and React.JS.</p>
          <button className="more-info">More Info</button>
        </div>
        <div className="education-content">
          <h3>Codecademy</h3>
          <h4>Building Website UIs</h4>
          <p>Studied in-depth concepts of website usability, accessibility, color theory, typography, and layouts using HTML and CSS. </p>
          <button className="more-info">More Info</button>
        </div>
      </div>
    </article>
  )
}
}

export default Education
