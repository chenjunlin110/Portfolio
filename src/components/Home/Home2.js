import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Replace this with your avatar image path
import backgroundMusic from "../../Assets/background-music.mp3"; // Import the background music
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been exploring it ever since.
              <br />
              <br />
              I am proficient in languages like
              <i>
                <b className="purple"> Python, Java, and C++. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing
              <i>
                <b className="purple"> Web Technologies, Software Products </b>
              </i>
              and exploring fields like
              <i>
                <b className="purple"> Artificial Intelligence and Machine Learning.</b>
              </i>
              <br />
              <br />
              I also enjoy creating products using
              <b className="purple"> React.js</b> and
              <i>
                <b className="purple"> Modern JavaScript Frameworks </b>
              </i>
              like <b className="purple">Next.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ textAlign: "center" }}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                onClick={handleToggleMusic} // Add toggle play/stop music event
                style={{ cursor: "pointer" }}
              />
            </Tilt>
            <p
  style={{
    marginTop: "10px",
    padding: "10px 15px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#6c63ff", // Background color for the bubble
    borderRadius: "15px", // Rounded corners
    display: "inline-block", // Adjusts the bubble size to the text
    position: "relative", // Needed for the arrow
  }}
>
  Most people can't pronounce my name correctly, so please click the Avatar. 👆
  <span
    style={{
      content: " ",
      position: "absolute",
      bottom: "-10px", // Position the arrow below the bubble
      left: "20px", // Position the arrow horizontally
      width: "0",
      height: "0",
      borderLeft: "10px solid transparent", // Left side of the triangle
      borderRight: "10px solid transparent", // Right side of the triangle
      borderTop: "10px solid #6c63ff", // Color matches bubble background
    }}
  ></span>
</p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chenjunlin110" // Update with your GitHub profile URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junlin-chen-4716b8321/" // Update with your LinkedIn profile URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com" // Update with your Instagram profile URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <audio ref={audioRef} src={backgroundMusic} />
    </Container>
  );
}

export default Home2;