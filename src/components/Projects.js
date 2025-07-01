import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import jobexpert from "../assets/img/job expert .png";
import skill from "../assets/img/skill.png";
import todo from "../assets/img/todo.jpg";
import salonPabaluImg from "../assets/img/salon pabalu.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Salon Pabalu",
      description: "Website for a local salon in the Sri Lanka that offers a variety of services such as haircuts, styling, and more.",
      imgUrl: salonPabaluImg,
      technologies: ["JavaScript", "CSS", "Node.js","MongoDB"],
    },
    {
      title: "JOB Expert",
      description: "Job Expert is a platform that allows users to find jobs and apply for them. special features are create a cv generator and job search.",
      imgUrl: jobexpert,
      technologies: ["React", "Express.js", "MongoDB", "Node.js","tailwind"],
    },
    {
      title: "EduFlow",
      description: "Design & Development",
      imgUrl: skill,
      technologies: ["springboot","React","tailwind","MongoDB",],
    },
    {
      title: "TODO mobile app",
      description: "TODO mobile app is a simple todo list app that allows you to add, edit, and delete tasks.",
      imgUrl: todo,
      technologies: ["Kotlin"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I've worked on.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
