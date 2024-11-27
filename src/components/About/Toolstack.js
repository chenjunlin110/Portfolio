import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGit, SiMacos, SiLatex } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /> {/* macOS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex /> {/* LaTeX */}
      </Col>
    </Row>
  );
}

export default Toolstack;
