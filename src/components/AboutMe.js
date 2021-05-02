import React, { Component } from "react";
import ProfilePhoto from "../img/profile-photo.jpg";
import "../css/about.css";

class AboutMe extends Component {
  render() {
    return (
      <article className="about">
        <div aria-hidden="true" className="anchor" id="about" />

        <div aria-labelledby="heading-about" className="title-heading-wrapper">
          <h2 aria-describedby="about-text-wrapper" className="heading-about">
            About
          </h2>
        </div>

        <div className="about-container">
          <div className="image-wrapper">
            <div
              aria-describedby="about-text-wrapper"
              className="image-container"
            >
              <img
                alt="Lindsay Ciastko"
                className="profile-photo"
                src={ProfilePhoto}
              />
            </div>
          </div>

          <section
            aria-labelledby="heading-about"
            aria-label="About Lindsay"
            className="about-text-wrapper"
          >
            <p>
              {
                Enhancing peoples' lives drives me to create revolutionary concepts passionately. I love designing customer-focused and customer-centric user experiences, which propels me to think "outside the box" to develop unique ideas. I offer my singleminded devotion to innovative concepts, developing unparalleled designs, and leading technical development.
              }
            </p>

            <p>
            {
              My technical understanding and creative mindset enable me to quickly discover customers' pain points and assemble originative solutions accordingly. This has been my drive and concentration throughout my career and studies.
            }
            </p>
            <p>
            {
              Whether it is helping someone understand their wants/desires, resolve their technical issues, or designing a digital or tangible product, I have always put people at the center of my thoughts, actions, and processes. While I am independently motivated, I appreciate collective efforts and collaborate productively within group settings.

            }
            </p>
            <p>
            {
              Furthermore, my innovation, problem-solving, and critical thinking abilities will support any continued organizational efforts.
            }
            </p>
            <p>
            {
              I am most passionate about constructing and refining design models that wow users with their usefulness. This is the cornerstone of establishing the foundation for client growth and retention, which inevitably drives success.
            }
            </p>
            <p>

              Core Expertise:
              <ul>
              <li> Project Management </li>
              <li> UI/UX Design </li>
              <li> User Engagement </li>
              <li> Usability Testing </li>
              <li> Prototyping </li>
              <li> Front-End Development </li>
              </ul>

            </p>
            <p>
            {

            }
            </p>







Searching for a professional with technical proficiency in UX/UI design, usability testing, and project management?
We should connect! You can reach me here or via email at laciastko@gmail.com.
              }
            </p>
            <p>
              {
                "As time passed, my website became more and more complex and beautiful and my chat bot completely transformed. Instead of running in a browser through a bookmarklet, I was able to redesign my bot using Node.js and run it on the command line. In my perspective, this was absolutely revolutionary! Soon after, I applied for a scholarship with Udacity sponsored by Google for a Front End Developer Nanodegree. I was awarded this scholarship for both the challenge course and the nanodegree itself. I have finally finished my coursework and I am ready to tackle a career change."
              }
            </p>
          </section>
        </div>
      </article>
    );
  }
}

export default AboutMe;
