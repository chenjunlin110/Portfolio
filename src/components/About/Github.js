import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="chenjunlin110" // Replace with your GitHub username
        blockSize={15}
        blockMargin={5}
        color="#6f42c1" // Changed to a more personalized purple tone
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
