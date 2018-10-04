import React, { Component } from 'react';
import Main from "./components/Main";
import data from "./data/data.json";
import education from "./data/education.json";
import './App.css';

class App extends Component {
  state = {
    projectList: [],
    courseWork: []
  }
  componentWillMount() {
    this.setState({
      projectList: data,
      courseWork: education
    })
  }
  render() {
    const {projectList, courseWork} = this.state;
    return (
      <Main courseWork={courseWork} projectList={projectList}/>
    );
  }
}

export default App;
