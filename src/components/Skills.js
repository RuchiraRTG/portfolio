import { useEffect, useRef } from "react";
import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import react from "../assets/img/atom.png";
import css from "../assets/img/css-3.png";
import Java from "../assets/img/java.png";
import git from "../assets/img/social.png";
import mysql from "../assets/img/mysql.png";
import NODE from "../assets/img/node-js.png";
import github from "../assets/img/github (1).png";
import php from "../assets/img/php.png";
import android from "../assets/img/android.png";
import postman from "../assets/img/postman.png";
import Typescript from "../assets/img/typescript.png";
import anguler from "../assets/img/Angular_full_color_logo.svg.png";
import Flutter from "../assets/img/flutter-icon-2048x2048-ufx4idi8.png";
import springboot from "../assets/img/springboot.png";
import tailwind from "../assets/img/tailwind.png";
import Express from "../assets/img/ex.png";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Node.js", icon: NODE },
    { name: "Express", icon: Express },
    { name: "MySQL", icon: mysql },
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: springboot },
    { name: "Android", icon: android },
    { name: "Flutter", icon: Flutter },
    { name: "TypeScript", icon: Typescript },
    { name: "Angular", icon: anguler },
    { name: "Tailwind", icon: tailwind },
    { name: "PHP", icon: php },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Postman", icon: postman },
  ];

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container-main">
        <div className="skills-header fade-up">
          <p className="section-label-slash">/SKILLS</p>
          <h2 className="skills-main-title">Technologies</h2>
          <p className="skills-subtitle">
            The tools and technologies I work with to build modern, scalable applications.
          </p>
        </div>
        <div className="skills-grid-modern">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-up" style={{ transitionDelay: `${index * 40}ms` }}>
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-card-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
