import React, { Component } from 'react';
import Main from "./components/Main";
import data from "./data/data";
import currProject from "./data/currProject";
import education from "./data/education";
import work from "./data/work";
import './App.css';
import './css/responsive.css';

class App extends Component {
  state = {
    projectList: [],
    currProjectList: [],
    courseWork: [],
    workExperience: []
  }
  componentWillMount() {
    this.setState({
      projectList: data,
      currProjectList: currProject,
      courseWork: education,
      workExperience: work
    })
  }
  render() {
    const {projectList, courseWork, workExperience, currProjectList} = this.state;
    return (
      <Main courseWork={courseWork} projectList={projectList} currProjectList={currProjectList} workExperience={workExperience}/>
    );
  }
}

export default App;
