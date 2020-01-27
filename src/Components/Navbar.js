import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="titleBlock">
            <a className="titleStyle" onClick={this.scrollToTop}> Richard Mac </a>
          </div>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="About Me"
                spy={true}
                smooth={true}
                offset={-400}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Connect"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={this.scrollToBottom}
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
