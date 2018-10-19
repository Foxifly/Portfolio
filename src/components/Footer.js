import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer aria-labelledby="copyright">
        <h5 aria-describedby="rights-reserved" className="copyright">
          Copyright 2018 - Lindsay A Ciastko
        </h5>
        <h6 aria-describedby="copyright" className="rights-reserved">
          All Rights Reserved
        </h6>
      </footer>
    );
  }
}

export default Footer;
