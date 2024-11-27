import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects will be added soon. Stay tuned!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300" // Placeholder image
              isBlog={false}
              title="Project Placeholder"
              description="This is a placeholder for future projects. Details will be updated soon."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300" // Placeholder image
              isBlog={false}
              title="Project Placeholder"
              description="This is a placeholder for future projects. Details will be updated soon."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300" // Placeholder image
              isBlog={false}
              title="Project Placeholder"
              description="This is a placeholder for future projects. Details will be updated soon."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
