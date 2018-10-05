import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare, faGithub, faLinkedin, faFile, faEnvelope)

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">Logo here</div>
        <ul className="nav-list">
          <li className="nav-item"><a className="nav-item-link selected" href="#home">HOME</a></li>
          <li className="nav-item"><a className="nav-item-link" href="#about">ABOUT</a></li>
          <li className="nav-item"><a className="nav-item-link" href="#education">EDUCATION</a></li>
          <li className="nav-item"><a className="nav-item-link" href="#projects">PROJECTS</a></li>
          <li className="nav-item"><a className="nav-item-link" href="#contact">CONTACT</a></li>
        </ul>
        <ul className="sm-nav-list">
          <li className="sm-nav-item"><FontAwesomeIcon icon={["fab", "facebook-square"]}/></li>
          <li className="sm-nav-item"><FontAwesomeIcon icon={["fab", "github"]}/></li>
          <li className="sm-nav-item"><FontAwesomeIcon icon={["fab", "linkedin"]}/></li>
          <li className="sm-nav-item"><FontAwesomeIcon icon={["fas", "file"]}/></li>
          <li className="sm-nav-item"><FontAwesomeIcon icon={["fas", "envelope"]}/></li>
        </ul>
      </nav>

    )
  }

}

export default NavBar
