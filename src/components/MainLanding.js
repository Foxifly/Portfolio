import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTimeout from 'react-timeout'


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

library.add(
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faGit,
  faJsSquare,
  faNode,
  faGulp
);

class MainLanding extends Component {
  state = {
    designHidden: true,
    determinationHidden: true
  }
  componentDidMount() {
    setTimeout(()=> {
      this.setState({designHidden:false})
    }, 2000)
    setTimeout(()=> {
      this.setState({determinationHidden:false})
    }, 4000)
  }

  render() {
    const {designHidden, determinationHidden} = this.state;
    return (
      <div>
        <div className="main-landing">
        <div className="spacing"></div>
        <div className="name-wrapper">
          <h1> Lindsay Ciastko</h1>
          </div>

          <div className="icon-container">
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "react"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "css3-alt"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "html5"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "sass"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "git"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "js-square"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "node"]} />
            </p>
            <p className="code-icon">
              <FontAwesomeIcon icon={["fab", "gulp"]} />
            </p>
          </div>
          <h2 className="desc-words">Development.</h2>
          {!designHidden &&
            <h2 className="desc-words">Design.</h2>
          }
          {!determinationHidden &&
          <h2 className="desc-words">Determination.</h2>
          }

        </div>
      </div>
    );
  }
}

export default ReactTimeout(MainLanding);
