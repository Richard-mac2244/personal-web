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
            University and transitioning over to software engineering field. I love taking on challenges and creating
            solutions that make everyone's lives a lot easier. Well what are you waiting for, take a look around!
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;
