import React from 'react';
import res from '../pictures/Resume.png';
import '../Style/ResumePicture.css';

function Resume({ title, subtitle, dark, id }){
  return(
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className = "Resume">
          <img className= "ResumePic" src={res} alt="Resume"/>
        </div>
      </div>
    </div>
  )
}

export default Resume;
