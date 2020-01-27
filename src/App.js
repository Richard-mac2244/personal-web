import React, {Component} from 'react';
import './App.css';
import Resume from './containers/Resume';
import Project from './containers/Projects';
import Personal from './containers/Personal';
import MainContainer from './containers/MainContainer';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { Link, animateScroll as scroll } from "react-scroll";
import './Scripts/TransparentNav.js';
import './Scripts/Bottom.js';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContainer
          title="About Me"
          dark={false}
          id="About Me"
        />
        <Resume
          title="Resume"
          dark={false}
          id="Resume"
        />
        <Project
          title="Projects"
          dark={false}
          id="Projects"
        />
        <hr></hr>
        <Personal
          className="Connect"
          dark={false}
          id="Connect"
        />
      </div>
    );
  }
}

export default App;
