import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTimeout from "react-timeout";

import {
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faGit,
  faJsSquare,
  faNode,
  faGulp
} from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

library.add(
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faGit,
  faJsSquare,
  faNode,
  faGulp,
  faChevronCircleDown
);

class MainLanding extends Component {
  state = {
    designHidden: true,
    determinationHidden: true,
    developmentHidden: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ designHidden: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ developmentHidden: false });
    }, 4000);
    setTimeout(() => {
      this.setState({ determinationHidden: false });
    }, 5000);
  }

  render() {
    const { designHidden, determinationHidden, developmentHidden } = this.state;
    return (
      <div>
        <div className="main-landing">
          <div className="spacing" />
          <div className="name-wrapper">
            <h1> Lindsay Ciastko</h1>
          </div>

          <div className="icon-container">
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "css3-alt"]} />
            </p>

            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "js-square"]} />
            </p>

            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "react"]} />
            </p>

            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "node"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "sass"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "git"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "gulp"]} />
            </p>
          </div>
          <div className="desc-word-wrapper">
            {!designHidden && <h2 className="desc-word-1">Design.</h2>}
            {!developmentHidden && (
              <h2 className="desc-word-2">Development.</h2>
            )}
            {!determinationHidden && (
              <h2 className="desc-word-3">Determination.</h2>
            )}
          </div>
          <a href="#about">
            <div className="go-down">
              <FontAwesomeIcon icon={["fas", "chevron-circle-down"]} />
            </div>
          </a>

          <div className="nav-container">
          <div className="nav-wrapper-a">
            <a href="#projects">ABOUT</a>
          </div>
          <div className="nav-wrapper-b">
            <a href="#projects">EDUCATION</a>
          </div>
          <div className="nav-wrapper-c">
            <a href="#projects">PROJECTS</a>
          </div>
          <div className="nav-wrapper-d">
            <a href="#projects">CONTACT</a>
          </div>

</div>

        </div>
      </div>
    );
  }
}

export default ReactTimeout(MainLanding);
