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
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </li>
          <li className="sm-nav-item">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </li>
          <li className="sm-nav-item">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </li>
          <li className="sm-nav-item">
            <FontAwesomeIcon icon={["fas", "file"]} />
          </li>
          <li className="sm-nav-item">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
