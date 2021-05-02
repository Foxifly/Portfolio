import React, { Component } from "react";
import ProfilePhoto from "../img/profile-photo.jpg";
import "../css/about.css";

class AboutMe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAboutHidden: true
    };
    this.openAbout = this.openAbout.bind(this);
  }

  state = {
    isAboutHidden: true
  };

  openAbout() {
    let currState = this.state.isAboutHidden
    let newState = !currState
    this.setState({
      isAboutHidden: newState
    });
  }

  render() {
    let currentState = this.state.isAboutHidden
    if (currentState) {
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
                  Enhancing peoples' lives drives me to create revolutionary concepts passionately. I love designing customer-focused and customer-centric user experiences, which propels me to think "outside the box" to develop unique ideas. I offer my singleminded devotion to innovative concepts, developing unparalleled designs, and leading technical development. My technical understanding and creative mindset enable me to quickly discover customers' pain points and assemble originative solutions accordingly. This has been my drive and concentration throughout my career and studies.
              </p>
              <button className="about-show" onClick={this.openAbout}>
                Show More
              </button>
            </section>
          </div>
        </article>


    );
  } else if (currentState == false) {

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
                Enhancing peoples' lives drives me to create revolutionary concepts passionately. I love designing customer-focused and customer-centric user experiences, which propels me to think "outside the box" to develop unique ideas. I offer my singleminded devotion to innovative concepts, developing unparalleled designs, and leading technical development. My technical understanding and creative mindset enable me to quickly discover customers' pain points and assemble originative solutions accordingly. This has been my drive and concentration throughout my career and studies.
            </p>
            <p>
              Whether it is helping someone understand their wants/desires, resolve their technical issues, or designing a digital or tangible product, I have always put people at the center of my thoughts, actions, and processes. While I am independently motivated, I appreciate collective efforts and collaborate productively within group settings.
            </p>

            <p>
              Furthermore, my innovation, problem-solving, and critical thinking abilities will support any continued organizational efforts. I am most passionate about constructing and refining design models that wow users with their usefulness. This is the cornerstone of establishing the foundation for client growth and retention, which inevitably drives success.
            </p>

            <p>
              Core Expertise:
              <ul>
              <li class="core-expertise"> Project Management </li>
              <li class="core-expertise"> UI/UX Design </li>
              <li class="core-expertise"> User Engagement </li>
              <li class="core-expertise"> Usability Testing </li>
              <li class="core-expertise"> Prototyping </li>
              <li class="core-expertise"> Front-End Development </li>
              </ul>
            </p>

            <p>
Searching for a professional with technical proficiency in UX/UI design, usability testing, and project management? We should connect!
            </p>

            <button  className="about-show" onClick={this.openAbout}>
              Show Less
            </button>
          </section>
        </div>
      </article>


  );

  }
}
}

export default AboutMe;
