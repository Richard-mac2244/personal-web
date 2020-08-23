import React, { Component } from 'react';
import pic2 from '../pictures/pic2.png';
import '../Style/icon.css';

class MainContainer extends React.Component{
  constructor({ props }) {
    super(props);
  }
  render() {
    return(
      <div className="section1">
        <div className="mainBody" id={this.props.id}>
          <div className="image-cropper">
            <img className= "Profile_pic" src={pic2} alt="Avatar"/>
          </div>
          <div className="body">
            <p className= "about_me"> Hi, my name is Richard Mac and welcome to my personal website. I am a recent graduate from San Jose State University with a Bachelors of Science
            in Chemical Engineering and minor in Computer Science. I love taking on new challenges and working on new technologies that have a direct impact on everyone's lives. Other
            than academics, my hobbies are film photography, lifting, play video games, and going on hikes with friends. This is a personal website to showcase some of my projects and
            social media platforms that I am usually on!
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;
