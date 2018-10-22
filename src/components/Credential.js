import React, { Component } from "react";

class Credential extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { course } = this.props;
    const { modal } = this.state;
    return (
      <div aria-labelledby="course-type" className="education-content">
        <h3 aria-describedby="course-description" className="course-type">{course.type}</h3>
        <img alt={course.name} className="course-logo" src={course.logo} />
        <p className="course-description">{course.description}</p>
        <button onClick={this.handleClick} className="more-info">
          More Info
        </button>

        {modal && (
          <div aria-hidden={!this.state.modal} className="modal">
            <div aria-labelledby="name" className="edu-modal-content">
              <div aria-labelledby="name" aria-describedby="date" className="heading-wrapper">
                <h3 className="name" id="name">
                  {course.type} ({course.name})
                </h3>
                <h4 className="date">{course.date}</h4>
              </div>

              <div className="cert-img-wrapper">
                <img
                  className="cert-img"
                  alt={`${course.type} certificate from ${course.name}`}
                  src={course.certificate}
                />
              </div>

              <div aria-labelledby="name" aria-describedby="description" className="description-wrapper">
                <p className="description">{course.long_description}</p>
              </div>

              <div aria-labelledby="name" aria-describedby="description" className="course-link-wrapper-1">
                <a
                  className="edu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={course.certificate_url}
                >
                  Certificate
                </a>
              </div>

              <div aria-labelledby="name" aria-describedby="description" className="course-link-wrapper-2">
                <a
                  className="edu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={course.course_url}
                >
                  Course
                </a>
              </div>

              <div aria-labelledby="name" aria-describedby="description" className="close-button-wrapper">
                <button
                  onClick={this.handleClick}
                  className="invalid-input-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Credential;
