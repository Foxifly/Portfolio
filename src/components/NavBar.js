import React, { Component } from 'react';

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
          <li className="sm-nav-item">SM</li>
          <li className="sm-nav-item">SM</li>
          <li className="sm-nav-item">SM</li>
          <li className="sm-nav-item">SM</li>
          <li className="sm-nav-item">SM</li>
        </ul>
      </nav>

    )
  }

}

export default NavBar
