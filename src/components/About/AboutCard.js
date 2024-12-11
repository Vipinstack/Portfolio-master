import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vipin Singh </span>
            from <span className="purple"> Delhi NCR, India.</span>
            <br />
            I am currently employed as a software developer at India Today Group.
            <br />
            I have completed a Bachelor of Computer Applications (BCA) from CCSU University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Passionate about building innovative solutions that solve real-world problems!"{" "}
          </p>
          <footer className="blockquote-footer">Vipin Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
