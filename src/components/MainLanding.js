import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3Alt, faHtml5, faSass, faGit, faJsSquare, faNode, faGulp} from '@fortawesome/free-brands-svg-icons'

library.add(faReact, faCss3Alt, faHtml5, faSass, faGit, faJsSquare, faNode, faGulp)

class MainLanding extends Component {
  render() {
    return (
      <div>
        <div className="main-landing">
          <h1> Lindsay Ciastko
          <FontAwesomeIcon icon={["fab", "react"]}/>
           <FontAwesomeIcon icon={["fab", "css3-alt"]}/>
           <FontAwesomeIcon icon={["fab", "html5"]}/>
           <FontAwesomeIcon icon={["fab", "sass"]}/>
           <FontAwesomeIcon icon={["fab", "git"]}/>
           <FontAwesomeIcon icon={["fab", "js-square"]}/>
           <FontAwesomeIcon icon={["fab", "node"]}/>
            <FontAwesomeIcon icon={["fab", "gulp"]}/>
           </h1>

        </div>

        </div>
    );
  }
}

export default MainLanding;
