import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandip Sharan Senthil Kumar </span>
            <br />
            I am currently seeking for full-time opportunities in the field of <span className="purple">Robotics</span>
            <br />
            Pursiong Masters in Robotics Engineering from the University of Maryland
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "--If the code works, don't touch it !--"{" "}
          </p>
          <footer className="blockquote-footer">1<sup>st</sup> rule of programming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
