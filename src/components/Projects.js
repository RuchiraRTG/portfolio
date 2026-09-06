import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import jobexpert from "../assets/img/job expert .png";
import skill from "../assets/img/skill.png";
import todo from "../assets/img/todo.jpg";
import salonPabaluImg from "../assets/img/salon pabalu.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Salon Pabalu",
      description: "Website for a local salon in Sri Lanka offering haircuts, styling, and more services.",
      imgUrl: salonPabaluImg,
      technologies: ["JavaScript", "CSS", "Node.js", "MongoDB"],
      category: "Web",
    },
    {
      title: "JOB Expert",
      description: "Platform allowing users to find jobs, apply, generate CVs, and search listings.",
      imgUrl: jobexpert,
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind"],
      category: "Web",
    },
    {
      title: "EduFlow",
      description: "Education management system with Spring Boot backend and React frontend.",
      imgUrl: skill,
      technologies: ["Spring Boot", "React", "Tailwind", "MongoDB"],
      category: "Web",
    },
    {
      title: "TODO Mobile App",
      description: "Simple and elegant todo list app for Android with add, edit, and delete tasks.",
      imgUrl: todo,
      technologies: ["Kotlin"],
      category: "Mobile",
    },
    {
      title: "Business Startup",
      description: "Modern landing page for a business startup with responsive design.",
      imgUrl: projImg2,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
    },
    {
      title: "Business Portal",
      description: "Clean business portal UI with interactive components and animations.",
      imgUrl: projImg3,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
    },
  ];

  const filters = ['All', 'Web', 'Mobile'];

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Intersection observer for fade-up
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="section-watermark">PORTFOLIO</div>
      <div className="container-main">
        {/* Header */}
        <div className="projects-header fade-up">
          <div>
            <p className="section-label-slash">/SELECTED WORK</p>
            <h2 className="projects-title">Projects</h2>
          </div>
          <a href="#connect" className="view-all-btn">
            View All Work ↗
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs fade-up stagger-1">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card fade-up"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="project-card-img">
                <img src={project.imgUrl} alt={project.title} />
                <div className="project-card-overlay">
                  <div className="overlay-arrow">↗</div>
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
