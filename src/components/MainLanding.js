import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTimeout from "react-timeout";
import "../css/mainlanding.css";
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
        <div aria-labelledby="lindsay" className="main-landing">
          <div
            aria-labelledby="lindsay"
            aria-describedby="icon-container"
            className="name-wrapper"
          >
            <h1 className="lindsay"> Lindsay Ciastko</h1>
          </div>

          <div className="icon-container">
            <div role="img" alt="html5" className="code-icon">
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </div>

            <div role="img" alt="css" className="code-icon">
              <FontAwesomeIcon icon={["fab", "css3-alt"]} />
            </div>

            <div role="img" alt="javascript" className="code-icon">
              <FontAwesomeIcon icon={["fab", "js-square"]} />
            </div>

            <div role="img" alt="react" className="code-icon">
              <FontAwesomeIcon icon={["fab", "react"]} />
            </div>

            <div role="img" alt="node" className="code-icon">
              <FontAwesomeIcon icon={["fab", "node"]} />
            </div>
            <div role="img" alt="sass" className="code-icon">
              <FontAwesomeIcon icon={["fab", "sass"]} />
            </div>

            <div role="img" alt="git" className="code-icon">
              <FontAwesomeIcon icon={["fab", "git"]} />
            </div>

            <div role="img" alt="gulp" className="code-icon">
              <FontAwesomeIcon icon={["fab", "gulp"]} />
            </div>
          </div>

          <div aria-describedby="desc-word-1" className="desc-word-wrapper">
            {!designHidden && (
              <h2 aria-hidden={!designHidden} className="desc-word-1">
                Design.
              </h2>
            )}
            {!developmentHidden && (
              <h2 aria-hidden={!designHidden} className="desc-word-2">
                Development.
              </h2>
            )}
            {!determinationHidden && (
              <h2 aria-hidden={!designHidden} className="desc-word-3">
                Determination.
              </h2>
            )}
          </div>

          <div aria-labelledby="go-down" className="down">
            <a href="#about">
              <div role="button" aria-label="go down" className="go-down">
                <FontAwesomeIcon icon={["fas", "chevron-circle-down"]} />
              </div>
            </a>
          </div>

          <div role="navigation" className="nav-container">
            <a href="#about">
              <div className="nav-wrapper-a">ABOUT</div>
            </a>

            <a href="#education">
              <div className="nav-wrapper-b">EDUCATION</div>
            </a>
            <a href="#work-experiece">
              <div className="nav-wrapper-d">EXPERIENCE</div>
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
