import React, { Component } from 'react';
import Main from "./components/Main";
import data from "./data/data";
import education from "./data/education";
import work from "./data/work";
import './App.css';
import './css/responsive.css';

class App extends Component {
  state = {
    projectList: [],
    courseWork: [],
    workExperience: []
  }
  componentWillMount() {
    this.setState({
      projectList: data,
      courseWork: education,
      workExperience: work
    })
  }
  render() {
    const {projectList, courseWork, workExperience} = this.state;
    return (
      <Main courseWork={courseWork} projectList={projectList} workExperience={workExperience}/>
    );
  }
}

export default App;
