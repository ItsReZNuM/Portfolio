import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import deleteacc from "../../Assets/Projects/deleteacc.png";
import fast from "../../Assets/Projects/fast.png";
import idhash from "../../Assets/Projects/idhash.png";
import fourinarow from "../../Assets/Projects/fourinarow.png";
import bomber from "../../Assets/Projects/bomber.png";
import digit from "../../Assets/Projects/digit.png";
import igbot from "../../Assets/Projects/igbot.png";
import pentest from "../../Assets/Projects/pentest.png";
import price from "../../Assets/Projects/price.png";
import twenty from "../../Assets/Projects/twenty.png";
import unit from "../../Assets/Projects/unit.png";
import unknown from "../../Assets/Projects/unknown.png";
import course_selection from "../../Assets/Projects/course_selection.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fourinarow}
              isBlog={false}
              title="4InARow Bot in Telegram"
              description="This bot is 4InARow Game in telegram.
              You can play this game with everybody you want in inline mode of telegram and you can play with Bot in Three hardness levels"
              ghLink="https://github.com/ItsReZNuM/4InARowTelBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bomber}
              isBlog={false}
              title="Iranian B*omber Script"
              description="This Scriptt sends about 40 SMS in a moment from different sites at exact time to your vi*ctim number (Iranian Numbers Only! )"
              ghLink="https://github.com/ItsReZNuM/SMSBomber"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Telegram Numeric Id Bot"
              description="This Bot gives you your numeric in a simple way and you can forward in messages from channels or PVs and If a person didn't closed his/her forward bot can give you him/her numeric ID "
              ghLink="https://github.com/ItsReZNuM/TelDigitIDBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igbot}
              isBlog={false}
              title="(IG Downloader Bot For Telegram)"
              description="This bot gets profile photo and info , download highlights , posts and stories , powered by MajidAPI"
              ghLink="https://github.com/ItsReZNuM/InstaDLBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentest}
              isBlog={false}
              title="Peneteration Test Script"
              description="This Script Uses differents methods to find the vulnarabilities of sites and give you a text of those whole things "
              ghLink="https://github.com/ItsReZNuM/PythonPenTest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={price}
              isBlog={false}
              title="Price Bot"
              description="You can use this bot if you want to know the exact time & date , Gold Price , Crypto Currencies and etc ... "
              ghLink="https://github.com/ItsReZNuM/PriceTGBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twenty}
              isBlog={false}
              title="2048 Game Telegram Bot"
              description="The Famous 2048 Game in Telegram !
              You can read the help in the bot and the readme , and also google :)
              You can play this game in the bot by itself. "
              ghLink="https://github.com/ItsReZNuM/2048TelBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unit}
              isBlog={false}
              title="Unit Converter In Telegram"
              description="This bot has a lot of units to convert to each other , such as pressure , temperature , speed , weight and etc ...
              Just Give it a Test !"
              ghLink="https://github.com/ItsReZNuM/UnitBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unknown}
              isBlog={false}
              title="Unknown Personal ChatBot"
              description="It is a Personal ChatBot Only For yourself !
              Bot it is not fully unknown actually :)
              It'll give you the username , numeric ID , name and everything you can get from TG library XD "
              ghLink="https://github.com/ItsReZNuM/UnknownChatBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course_selection}
              isBlog={false}
              title="Course Selection Tool"
              description="a simple tool to help you visionize your course selection for university and you can see any confliction of your courses !"
              ghLink="https://github.com/ItsReZNuM/CourseSelection"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
