import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Junlin Chen </span>
            from <span className="purple">Piscataway, New Jersey, USA.</span>
            <br />
            I am currently pursuing a double major in Computer Science and Mathematics at Rutgers University - New Brunswick.
            <br />
            I am actively seeking research opportunities and internships to enhance my skills and gain hands-on experience.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring downtown areas
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep exploring and building, because every step matters!"{" "}
          </p>
          <footer className="blockquote-footer">Junlin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
