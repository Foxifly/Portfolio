import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div class="logo">Logo here</div>
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-item-link selected" href="#home">HOME</a></li>
          <li class="nav-item"><a class="nav-item-link" href="#about">ABOUT</a></li>
          <li class="nav-item"><a class="nav-item-link" href="#education">EDUCATION</a></li>
          <li class="nav-item"><a class="nav-item-link" href="#projects">PROJECTS</a></li>
          <li class="nav-item"><a class="nav-item-link" href="#contact">CONTACT</a></li>
        </ul>
        <ul class="sm-nav-list">
          <li class="sm-nav-item">SM</li>
          <li class="sm-nav-item">SM</li>
          <li class="sm-nav-item">SM</li>
          <li class="sm-nav-item">SM</li>
          <li class="sm-nav-item">SM</li>
        </ul>
      </nav>

    )
  }

}

export default NavBar
