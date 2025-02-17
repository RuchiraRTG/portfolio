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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>My SQL</h5>
                            </div>
                            <div className="item">
                                <img src={NODE} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Android</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
