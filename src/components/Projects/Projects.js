import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cosmo from "../../Assets/Projects/cosmo.png";
import dailyO from "../../Assets/Projects/dailyO.png";
import pragya from "../../Assets/Projects/pragya.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmo}
              isBlog={false}
              title="Cosmopolitan"
              description="Cosmopolitan India delivers the latest in beauty, fashion, relationships, and lifestyle. It features tips from top Indian celebrities on living a vibrant life, along with updates on trends and expert advice. Stay inspired with insights into celebrity lifestyles and advice to enhance your style, beauty, and relationships."
              demoLink="https://www.cosmopolitan.in/"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailyO}
              isBlog={false}
              title="DailyO"
              description="DailyO is a youth-driven news and opinion platform delivering crisp, clear, and easy-to-understand content. It focuses on providing news and insights tailored for the youth, ensuring accessible and engaging information for everyone."
              ghLink=""
              demoLink="https://www.dailyo.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pragya}
              title="Pragya Ai"
              description="Pragya AI is an internal CMS designed for organizational use, offering AI-powered features like text-to-image, speech-to-text, text-to-audio, OCR, translation, AI search, and department listing. It streamlines workflows, enhances productivity, and supports multilingual and multimedia content management."
              demoLink=""
              ghLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
