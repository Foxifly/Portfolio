import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import { faDesktop, faLink } from "@fortawesome/free-solid-svg-icons";

library.add(
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faGit,
  faJsSquare,
  faNode,
  faGulp,
  faDesktop,
  faLink
);

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  onMouseEnterHandler() {

      this.setState({
        hover: true
      });

  }
  onMouseLeaveHandler() {
    setTimeout(()=>{
      this.setState({
        hover: false
      });
    }, 200)

  }
  render() {
    const { projectInfo } = this.props;
    return (
      <div className="project-content">
        <div
          style={{
            width: "100%",
            height: 220,
            backgroundImage: `url(${projectInfo.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="project-image"
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          {this.state.hover && (
            <div className="hidden-overlay">
              <h3 className="project-name">{projectInfo.name}</h3>
              <p className="project-date">{projectInfo.date}</p>
              <div className="project-lang-container">
                {projectInfo.language.map(lang => {
                  return (
                    <p key={lang} className="lang-icon">
                      <FontAwesomeIcon icon={["fab", lang]} />
                    </p>
                  );
                })}
              </div>
              <p className="project-bio">{projectInfo.bio}</p>
              <a
                className="linkButton"
                target="_blank"
                rel="noopener noreferrer"
                href={projectInfo.demo}
              >
                <FontAwesomeIcon icon={["fas", "desktop"]} />
              </a>
              <a
                className="linkButton"
                target="_blank"
                rel="noopener noreferrer"
                href={projectInfo.github}
              >
                <FontAwesomeIcon icon={["fas", "link"]} />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Project;
