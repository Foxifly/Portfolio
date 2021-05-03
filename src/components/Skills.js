import React, { Component } from "react";
import "../css/skills.css";

class Skils extends Component {
  render() {
    return (
      <article className="skill">
        <div aria-hidden="true" className="anchor" id="contact" />

        <h2 aria-describedby="skills-paragraph" className="skills">
          {"SKILLS AT A GLANCE"}
        </h2>

        <p aria-labelledby="skills" className="skills-paragraph">
        <ul className="skills-list">
        <li>Usability Testing</li>
        <li>Computer Science</li>
        <li>User Interaction Design</li>
        <li>Web Technologies</li>
        <li>User Interface</li>
        <li>Customer Experience</li>
        <li>Problem Solving Techniques</li>
        <li>Project Management</li>
        <li>Internal Tools</li>
        <li>Visual Design</li>
        <li>Teamwork Skills</li>
        <li>Attention to Detail</li>
        <li>Data Architecture</li>
        <li>Mobile Applications</li>
        <li>B2C/B2B Experience</li>
        <li>Customer Needs Assessment</li>
        <li>Front-End Development</li>
        <li>Process Workflows & Wireframes</li>
        <li>Excellent Communication Skills</li>
        </ul>

        </p>
      </article>
    );
  }
}

export default Skils;
