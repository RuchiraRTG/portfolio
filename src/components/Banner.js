import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import profile from "../assets/img/Abstract Profile Photo Instagram Post.png"
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full | Stack developer ", "UI/UX designer " ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); 

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <div className="a"> 
                   Open to work
                    <div className="b">
                    </div>
                </div> <br/> 
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span><br/>
                <h1>{`Hi! I'm Ruchira`}
                   <br></br>
                   <span className="txt-rotate" dataPeriod="1000"  data-rotate= '["Full | Stack developer ", "UI/UX designer "]'><span className="wrap">{text}</span></span></h1>

                  <p>Hi! I'm Ruchira Tharupathi, a dedicated Full-Stack Developer currently studying at SLIIT, with a focus on the MERN stack and Java. I'm passionate about crafting dynamic, user-centered web applications, such as my recent projects, which reflect my problem-solving abilities and creativity. My tech journey began during my studies at university, where I first delved into coding and developed a deep interest in development. I embrace challenges and constantly seek opportunities to learn and grow. I stay ahead of the curve by following the latest tech trends and innovations. My ultimate goal is to master the full spectrum of development and contribute to impactful, real-world projects. </p>

                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                  <div style={{ marginTop: "15px", textAlign: "left" }}>
                    <a
                      href={require("../assets/img/Ruchira cv resume.pdf")}
                      download="Ruchira_Tharupathi_Resume.pdf"
                      className="resume-download-btn"
                    >
                       Download My Resume
                    </a>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={6} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profile} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
