import React, { Component } from "react";
import "../css/contact.css";

class SocialMedia extends Component {
  render() {
    return (
      <article className="contact">
        <div aria-hidden="true" className="anchor" id="contact" />

        <h2 aria-describedby="connect-paragraph" className="connect">
          {"Connect with  me on Social Media!"}
        </h2>

        <p aria-labelledby="connect" className="connect-paragraph">
          I would love to connect with you. I am currently available for
          freelance projects, open job positions, and more.

        </p>
      </article>
    );
  }
}

export default SocialMedia;
