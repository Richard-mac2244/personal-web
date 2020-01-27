import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FadeInSection from './ProjectFade.js';
import '../Style/ProjectStyle.css';
import images from './ProjectPictures.js';
import bodies from './ProjectBody.js';

function Projects({ title, dark, id }) {
  return(
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className="section-project">
          {images.map(image => (
            <FadeInSection key={image}>
              <div className="project-image" >
                <img className = {image} src = {image} alt={image}/>
              </div>
            </FadeInSection>
          ))}
          {bodies.map(body => (
            <FadeInSection key = {body}>
              <p className={body.substring(0,6)}> {body.substring(7)} </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
