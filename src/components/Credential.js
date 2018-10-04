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
      <div className="education-content">
        <h3>{course.name}</h3>
        <h4>{course.type}</h4>
        <p>{course.description}</p>
        <button onClick={this.handleClick} className="more-info">
          More Info
        </button>

        {modal && (
          <div aria-hidden={!this.state.modal} className="modal">
            <div className="edu-modal-content">
            <div className="heading-wrapper">
              <h3 id="name">{course.type}</h3>
              <h4>{course.name}</h4>
              </div>

              <div className="cert-img-wrapper">
                <img
                  className="cert-img"
                  alt={`${course.type} certificate from ${course.name}`}
                  src={course.certificate}
                />
              </div>
              <div className="date-wrapper">
              <p>{course.date}</p>
              </div>

              <div className="description-wrapper">
              <p>{course.long_description}</p>
              </div>

              <div className="course-link-wrapper-1">

                <a
                className="edu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={course.certificate_url}
                >
                  Certificate
                </a>

                </div>

                <div className="course-link-wrapper-2">
                <a
                  className="edu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={course.course_url}
                >
                  Course
                </a>

              </div>

              <div className="close-button-wrapper">
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
