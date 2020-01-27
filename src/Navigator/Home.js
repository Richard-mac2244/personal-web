import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import styles from './arrow.css';
import iconStyle from '../containers/icon.css';
import Resume from './Resume'
import Projects from './Projects'
import Personal from './Personal'
import res from '../pictures/res.png';
import pic2 from '../pictures/pic2.png';

class Home extends Component{
  constructor() {
      super();

      this.state = {
        showMenu: false,
        showHome: true,
        showPersonal: false,
        showProjects: false,
        showResume: false,
      };

      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
      this.changeResume = this.changeResume.bind(this);
      this.changeProjects = this.changeProjects.bind(this);
      this.changePersonal = this.changePersonal.bind(this);

    }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  changeHome = async() =>{
    if(!this.state.Home)
    {
      await this.setState(state => ({
        showResume: false,
        showHome: true,
        showPersonal: false,
        showProjects: false,
      }));
    }
    console.log("Home: " + this.state.showHome);
  }

  changeResume = async() =>{
    if(!this.state.changeResume)
    {
      await this.setState(state => ({
        showResume: true,
        showHome: false,
        showPersonal: false,
        showProjects: false,
      }));
    }
    console.log("Resume: " + this.state.showResume);
  }

  changeProjects = async() => {
    if(!this.state.showProjects)
    {
      await this.setState(state => ({
        showResume: false,
        showHome: false,
        showPersonal: false,
        showProjects: true,
      }));
    }
    console.log("Projects: " + this.state.showProjects);
  }

  changePersonal = async() => {
    if(!this.state.showPersonal)
    {
      await this.setState(state => ({
        showResume: false,
        showHome: false,
        showPersonal: true,
        showProjects: false,
      }));
    }
    console.log("Personal: " + this.state.showPersonal);
  }

  render(){
    return(
      <div>
        <DropdownButton id="dropdown-basic-button" title="Richard Mac" onClick={this.showMenu} >
        </DropdownButton>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
              <Dropdown.Item href="#/Home" onClick={this.changeHome}>{this.state.showHome ? 'Hide Home' : 'Show Home'}/</Dropdown.Item>
              <Dropdown.Item href="#/Resume" onClick={this.changeResume}>{this.state.showResume ? 'Hide Resume' : 'Show Resume'}/</Dropdown.Item>
              <Dropdown.Item href="#/Projects" onClick={this.changeProjects}>{this.state.showProjects ? 'Hide Projects' : 'Show Projects'}</Dropdown.Item>
              <Dropdown.Item href="#/Personal" onClick={this.changePersonal}>{this.state.showPersonal ? 'Hide Personal' : 'Show Personal'}</Dropdown.Item>
              </div>
            )
            : (
              null
            )
        }
        {
          this.state.showHome
          ? (
            <div className = "Home">
            <h3> About Me </h3>
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
        )
        : (
          null
        )
        }
        {
          this.state.showResume
            ? (
              <div className = "Resume">
                <h3> Resume </h3>
                <img className= "Resume_pic" src={res} alt="Avatar"/>
              </div>
            )
            : (
              null
            )
        }
        {
          this.state.showProjects
            ? (
              <div className = "Projects">
                <h3> Projects </h3>
              </div>
            )
            : (
              null
            )
        }
        {
          this.state.showPersonal
            ? (
              <div className = "Personal">
                <h3> Personal </h3>
              </div>
            )
            : (
              null
            )
        }
        </div>
    )
  }
}

export default Home;
