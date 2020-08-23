import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FadeInSection from './ProjectFade.js';
import '../Style/ProjectStyle.css';
import images from './ProjectPictures.js';
import bodies from './ProjectBody.js';
import proja1 from '../pictures/Project_Flash.png';

class Projects extends React.Component{
  constructor({ props }) {
    super(props);
  }
  render() {
    return(
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          <div className="section-project">
            {bodies.map(body => (
              <FadeInSection key = {body}>
                <img className="proja1" src = {proja1} alt="Project_Image_1"/>
                <p className={body.substring(0,6)}> {body.substring(7)} </p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
