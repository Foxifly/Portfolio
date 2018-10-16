import React, { Component } from "react";
import ProfilePhoto from "../img/profile-photo.jpg";
import "../css/about.css";

class AboutMe extends Component {
  render() {
    return (
      <article className="about" id="about">
        <div className="about-heading-wrapper">
          <h2>About</h2>
        </div>
        <div className="about-container">
          <div className="image-wrapper">
            <div className="image-container">
              <img className="profile-photo" src={ProfilePhoto} />
            </div>
          </div>
          <div className="about-text-wrapper">
            <p>
              {
                "In early 2016, I graduated Albion College with my shiny new Bachelor's Degree. Little did I know that the job market really wasn't looking for a newbie physics major. After spending some time struggling to find a job in physics, I decided to pick up coding to make the time go by faster. I spent a great deal of time designing a small website and a chat bot for a music sharing platform known as plug.dj. At first, this site and bot were honestly nothing special. My website looked like something straight out of the 90s, and my bot had minimal features and crashed constantly. But, I never gave up working on them."
              }
            </p>
            <p>
              {
                "As time passed, my website became more and more complex and beautiful and my chat bot completely transformed. Instead of running in a browser through a bookmarklet, I was able to redesign my bot using Node.js and run it on the command line. In my perspective, this was absolutely revolutionary! Soon after, I applied for a scholarship with Udacity sponsored by Google for a Front End Developer Nanodegree. I was awarded this scholarship for both the challenge course and the nanodegree itself. I have finally finished my coursework and I am ready to tackle a career change."
              }
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default AboutMe;
