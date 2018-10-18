import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../css/navbar.css'
import {
  faFacebookSquare,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faGithub, faLinkedin, faFile, faEnvelope);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isHide: true };
    this.hideBar = this.hideBar.bind(this);
  }
  hideBar() {

    if (window.scrollY > 710) {
      this.setState({ isHide: false });
    } else if (window.scrollY <= 710) {
      this.setState({ isHide: true });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }
  render() {
    let classHide = this.state.isHide ? "hide" : "";
    return (
      <nav className={"topbar " + classHide}>
        <ul className="nav-list">
          <li className="sm-nav-item">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mystiqueyq">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
          </li>
          <li className="sm-nav-item">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Foxifly?tab=repositories">
            <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li className="sm-nav-item">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lciastko/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </li>
          <li className="sm-nav-item">
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1tqaZf6iVW4Nzqr6PZrKaVlHSD-_FWOqWCngYtlq77wo/edit?usp=sharing">
            <FontAwesomeIcon icon={["fas", "file"]} />
            </a>
          </li>
          <li className="sm-nav-item">
          <a href="mailto:lindsayciastko@gmail.com">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
