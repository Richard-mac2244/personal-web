import React from 'react';
import '../Style/ConnectStyle.css';

class Personal extends React.Component{
  constructor({ props }) {
    super(props);
  }

  render() {
    return(
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-link">
          <h3 className="link" > Connect </h3>
          <ul className = "connectLink">
            <li className = "listLink"> <a className = "secLink" href="https://www.linkedin.com/in/richard-mac-9a5b28112/"> LinkedIn </a> </li>
            <li className = "listLink"> <a className = "secLink" href="https://github.com/Richard-mac2244"> Github </a> </li>
            <li className = "listLink"> <a className = "secLink" href="https://www.instagram.com/rich.moments/"> Instagram </a> </li>
            <li className = "listLink"> <a className = "secLink" href="https://open.spotify.com/user/122207041?si=tgtYhVoHR5aun1D4osFsVw"> Spotify </a> </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Personal;
