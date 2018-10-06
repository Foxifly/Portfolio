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
    }, 2000);
    setTimeout(() => {
      this.setState({ developmentHidden: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ determinationHidden: false });
    }, 4000);
  }

  render() {
    const { designHidden, determinationHidden, developmentHidden } = this.state;
    return (
      <div>
        <div className="main-landing">
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
          <div className="down">
          <a href="#about">
            <div className="go-down">
              <FontAwesomeIcon icon={["fas", "chevron-circle-down"]} />
            </div>
          </a>
          </div>

          <div className="nav-container">
            <a href="#about">
              <div className="nav-wrapper-a">ABOUT</div>
            </a>

            <a href="#education">
              <div className="nav-wrapper-b">EDUCATION</div>
            </a>

            <a href="#projects">
              <div className="nav-wrapper-c">PROJECTS</div>
            </a>

            <a href="#contact">
              <div className="nav-wrapper-d">CONTACT</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTimeout(MainLanding);
