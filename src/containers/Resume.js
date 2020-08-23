import React, { Component } from 'react';
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from "react-scroll";
import res from '../pictures/Resume.png';
import sjsu from '../pictures/sjsu.png';
import disney from '../pictures/disney.png';
import project from '../pictures/project.png';
import creative from '../pictures/creative.png';
import '../Style/ResumePicture.css';

class Resume extends React.Component{
  constructor({ props }) {
    super(props);
  }
  click() {
    console.log("clicked");
  }

  render() {
    return(
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>

          <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', maxWidth: '100%'}}>
            <Card className = "card" border="primary" style={{ width: '200rem', margin: '50px'}} onClick={this.click}>
              <Card.Img className = "school-img" variant="top" src={sjsu} />
              <Card.Header><h3>Education</h3></Card.Header>
              <Card.Body>
                <Card.Text>
                  <h4>San Jose State University Class of 2020</h4>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Bachelors of Science in Chemical Engineering</ListGroupItem>
                <ListGroupItem>Minor in Computer Science</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <small className="text-muted">Under edits</small>
              </Card.Footer>
            </Card>

            <Card className = "card" border="primary" style={{ width: '200rem', margin: '50px' }}>
              <Card.Img className = "disney-img" variant="top" src={disney} />
              <Card.Header><h3>Work Experience</h3></Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Disney Streaming Services</ListGroupItem>
                <ListGroupItem>FlashTryp Inc.</ListGroupItem>
                <ListGroupItem>Lam Research</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <small className="text-muted">Under edits</small>
              </Card.Footer>
            </Card>

            <Card className = "card" border="primary" style={{ width: '200rem', margin: '50px' }}>
              <Card.Img className = "project-img" variant="top" src={project} />
              <Card.Header><h3>Project</h3></Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Gas Application</ListGroupItem>
                <ListGroupItem>Calendar</ListGroupItem>
                <ListGroupItem>Water Tracker</ListGroupItem>
                <ListGroupItem>Rocket.Build</ListGroupItem>
                <ListGroupItem>Adobe Xd</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <small className="text-muted">Under edits</small>
              </Card.Footer>
            </Card>

            <Card className = "card" border="primary" style={{ width: '200rem', margin: '50px' }}>
              <Card.Img className = "creative-img" variant="top" src={creative} />
              <Card.Header><h3>Competitions</h3></Card.Header>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Rocket.Build</ListGroupItem>
                <ListGroupItem>Adobe Xd</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <small className="text-muted">Under edits</small>
              </Card.Footer>
            </Card>
          </CardDeck>

        </div>
      </div>
    )
  }
}

export default Resume;
