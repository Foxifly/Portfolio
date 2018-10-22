import React, { Component } from "react";
import "../css/contact.css";

class Contact extends Component {
  state = {
    actionWords: [
      "amazing",
      "beautiful",
      "special",
      "creative",
      "big",
      "innovative",
      "inventive",
      "new",
      "exciting"
    ],
    actionWord: "awesome"
  };

  changeActionWord() {
    let ranActWord = this.state.actionWords[
      Math.floor(Math.random() * this.state.actionWords.length)
    ];
    this.setState({
      actionWord: ranActWord
    });
  }

  componentDidMount() {
    setInterval(
      function() {
        this.changeActionWord();
      }.bind(this),
      5000
    );
  }

  render() {
    return (
      <article className="contact">
        <div aria-hidden="true" className="anchor" id="contact" />

        <h2 aria-describedby="connect-paragraph" className="connect">
          {"LET'S CONNECT"}
        </h2>

        <p aria-labelledby="connect" className="connect-paragraph">
          I would love to connect with you. I am currently available for
          freelance projects, open job positions, and more.
          <br />{" "}
          {`Let's work together to build something ${this.state.actionWord}.`}
          <br /> <br /> <button className="contact-button">CONTACT</button>
        </p>
      </article>
    );
  }
}

export default Contact;
