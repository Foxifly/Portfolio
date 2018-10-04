import React, { Component } from "react";

class Credential extends Component {
  constructor(props) {
    super(props);
    state = {
      modal: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("HEY");
  }

  render() {
    const { course } = this.props;
    const { modal } = this.state;
    return (
      <div className="education-content">
        <h3>{course.name}</h3>
        <h4>{course.type}</h4>
        <p>{course.description}</p>
        <button onClick={this.handleClick} className="more-info">
          More Info
        </button>
      </div>

      {modal &&

      }
    );
  }
}

export default Credential;
