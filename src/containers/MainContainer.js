import React, { Component } from 'react';
import pic2 from '../pictures/pic2.png';
import '../Style/icon.css';

function MainContainer({ title, subtitle, dark, id }) {
  return(
    <div className="section1">
      <div className="mainBody" id={id}>
        <div className="image-cropper">
          <img className= "Profile_pic" src={pic2} alt="Avatar"/>
        </div>
        <div className="body">
          <p className= "about_me"> Hi, my name is Richard Mac and welcome to my personal website. I am a senior attending San Jose State
            University and transitioning over to software engineering field. I realized throughout my college career was that I love learning new
            things and pushing myself to expand my skillset. I love taking on new challenges and working on new technologies that have a direct impact on
            everyone's lives. This is a personal website to showcase some of my projects and social media platforms that I am usually on!
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;
