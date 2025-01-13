import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comingSoonImage from "../../Assets/Projects/coming_soon.png";
import cs112 from "../../Assets/Projects/cs112.png";
import simpleCalculator from "../../Assets/Projects/simpleCalculator.png"
import todolist from "../../Assets/Projects/todolist.png"

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
              imgPath={cs112} 
              isBlog={false}
              title="CS112: Data Structures"
              description="This is a cousework project constains of 10 assignments. The assignments are based on the topics of data structures and algorithms."
              ghLink="https://github.com/chenjunlin110/CS112"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath= {simpleCalculator} // Placeholder image
              isBlog={false}
              title="A simple Calculator"
              description="This is a simple Calculator done by purely HTML, CSS and JS."
              ghLink="https://github.com/chenjunlin110/simple-calculator"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist} // Placeholder image
              isBlog={false}
              title="TodoList"
              description="A responsive and interactive TodoList web application built using React.js. It allows users to add, toggle, delete tasks, and filter them by their status (All, Active, or Completed). Styled with modern CSS for a clean and intuitive user experience."
              ghLink="https://github.com/chenjunlin110/Todo-list" // Replace with the actual GitHub link if available
              demoLink="" // Replace with the actual demo link if available
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoonImage} // Placeholder image
              isBlog={false}
              title="Project Placeholder"
              description="This is a placeholder for future projects. Details will be updated soon."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath= {comingSoonImage} // Placeholder image
              isBlog={false}
              title="Project Placeholder"
              description="This is a placeholder for future projects. Details will be updated soon."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoonImage} // Placeholder image
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
