import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import deleteacc from "../../Assets/Projects/deleteacc.png";
import fast from "../../Assets/Projects/fast.png";
import idhash from "../../Assets/Projects/idhash.png";

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
              imgPath={deleteacc}
              isBlog={false}
              title="Telegram Delete Account"
              description="This Python Script Helps you to delete your telegram account instantly. You Have to use this script very carefully beacause this will delete your account , you can either delete your account in my.telegram.org but this is much easier."
              ghLink="https://github.com/ItsReZNuM/TelegramAccountDelete"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fast}
              isBlog={false}
              title="FastAPI"
              description="My first college project was ssomething that I had to do it with FastAPI and it has a really really simple UI. It is a simple CRUD application that allows you to create, read, update, and delete data using FastAPI as the backend framework."
              ghLink="https://github.com/ItsReZNuM/FastAPI-Uni-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idhash}
              isBlog={false}
              title="Telegram ID Hash Catcher"
              description="Usually , getting API Id,Hash for Iranian users is a bit difficult, so I created this script to make it easier for them. This script will help you to get your API Id and Hash in a very simple way."
              ghLink="https://github.com/ItsReZNuM/TelApiIDHash"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
