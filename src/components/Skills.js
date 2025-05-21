import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import react from "../assets/img/atom.png"
import css from "../assets/img/css-3.png"
import Java from "../assets/img/java.png"
import git from "../assets/img/social.png"
import mysql from "../assets/img/mysql.png"
import NODE from "../assets/img/node-js.png"
import github from "../assets/img/github (1).png"
import php from "../assets/img/php.png"
import android from "../assets/img/android.png" 
import postman from "../assets/img/postman.png"
import Typescript from "../assets/img/typescript.png"
import anguler from "../assets/img/Angular_full_color_logo.svg.png"
import Flutter from "../assets/img/flutter-icon-2048x2048-ufx4idi8.png"
import springboot from "../assets/img/springboot.png"
import tailwind from "../assets/img/tailwind.png"
import Express from "../assets/img/ex.png"
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JS", icon: js },
    { name: "REACT", icon: react },
    { name: "GIT", icon: git },
    { name: "MySQL", icon: mysql },
    { name: "Node.js", icon: NODE },
    { name: "GITHUB", icon: github },
    { name: "JAVA", icon: Java },
    { name: "Android", icon: android },
    { name: "PHP", icon: php },
    { name: "POSTMAN", icon:postman },
    { name: "Anguler", icon: anguler },
    { name: "Typescript", icon: Typescript },
    { name: "Flutter", icon: Flutter },
    { name: "tailwind", icon: tailwind },
    { name: "Springboot", icon: springboot },
    { name: "Express", icon: Express },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <p>Here are the technologies and tools I work with</p>
                  <div className="skills-grid">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <img src={skill.icon} alt={skill.name} />
                        <h5>{skill.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
