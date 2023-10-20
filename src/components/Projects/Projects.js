import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noduermas from "../../Assets/Projects/noduermas.png";
import oscurin from "../../Assets/Projects/oscurin.com.png";
import randomcatfact from "../../Assets/Projects/randomcatfact.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. <strong className="purple">(this site is under maintainance).</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oscurin}
              isBlog={false}
              title="Oscurin"
              description="Fake News about the daily news from Argentina, to read and have fun. Cases far from reality but fun, oscurin.com.ar was the complete opposite of Clarín.com, a well-known digital news portal.."
              ghLink="https://github.com/Johnkid65/Oscurin-2.0"
              demoLink="https://oscurin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomcatfact}
              isBlog={false}
              title="Api Cat Fact"
              description="This app calls an API and returns random facts about cats. If you open the console you can see the response of the API as well. There are thousands of facts about cats, take a quick look if you love kitties."
              ghLink="https://github.com/Johnkid65/ApiCatFact2"
              demoLink="https://api-cat-fact2-65mmeis9v-johnkid65.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noduermas}
              isBlog={false}
              title="La Sombra De Las Ratas"
              description="A short story I wrote a long time ago. Planted edited and with some background music. I think it's a wonderful fictional story. I still have to update the code, so they can change the language, at the moment it is only in Spanish."
              ghLink="https://github.com/Johnkid65/no-duermas"
              demoLink="https://no-duermas.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
