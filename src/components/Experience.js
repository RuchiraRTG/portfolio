import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Experience data ── */
const EXPERIENCES = [
  {
    id: 1,
    company: "Freelance Development",
    role: "Full Stack Developer",
    date: "2024 – Present",
    description:
      "Building end-to-end web applications for clients. Specialising in React, Node.js, Express, and MongoDB — from UI design to deployment.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
  },
  {
    id: 2,
    company: "SLIIT University",
    role: "BSc (Hons) Computer Science",
    date: "2022 – Present",
    description:
      "Pursuing a degree at Sri Lanka Institute of Information Technology with a focus on software engineering, data structures, algorithms, and full-stack development.",
    tags: ["Java", "OOP", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    company: "Personal Projects",
    role: "Lead Developer & UI Designer",
    date: "2021 – Present",
    description:
      "Shipped multiple solo projects — salon booking system, job platform, mobile apps in Kotlin. Each built independently from concept to production.",
    tags: ["MERN Stack", "Spring Boot", "Kotlin", "UI/UX"],
  },
  {
    id: 4,
    company: "Open Source",
    role: "Contributor & Collaborator",
    date: "2023 – Present",
    description:
      "Actively contributing to open-source repos on GitHub — fixing bugs, improving docs, and collaborating with global developers.",
    tags: ["GitHub", "TypeScript", "Git", "Collaboration"],
  },
];

/* ── Single row with expand ── */
const ExpItem = ({ item, isOpen, onToggle }) => {
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState(0);

  useEffect(() => {
    if (descRef.current) {
      setDescHeight(descRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className={`exp-row ${isOpen ? "exp-row--open" : ""}`}
      onClick={onToggle}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      {/* Original design row — company / role / date */}
      <div className="exp-row-main">
        <div className="experience-item-left">
          <span className="experience-company">{item.company}</span>
          <span className="experience-role">{item.role}</span>
        </div>
        <div className="exp-row-right">
          <span className="experience-date">{item.date}</span>
          {/* Small arrow indicator */}
          <span className="exp-row-arrow" aria-hidden="true">
            {isOpen ? "✕" : "↗"}
          </span>
        </div>
      </div>

      {/* Expandable description — same dark theme */}
      <div
        className="exp-row-desc-wrap"
        style={{ maxHeight: isOpen ? `${descHeight + 32}px` : "0px" }}
      >
        <div className="exp-row-desc-inner" ref={descRef}>
          <p className="exp-row-desc">{item.description}</p>
          <div className="exp-row-tags">
            {item.tags.map((t) => (
              <span key={t} className="exp-row-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main Experience Section ── */
export const Experience = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 100)
              );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* Original dark section — same as before */
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="section-watermark section-watermark-light">EXPERIENCE</div>

      <div className="container-main">
        {/* Original header */}
        <motion.div
          className="experience-header fade-up"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "8px"
            }}>
              /EXPERIENCE
            </p>
            <h2 className="experience-title">Background</h2>
          </div>
          <div className="experience-years">3+ years of building</div>
        </motion.div>

        {/* Accordion rows — same dark design + expand animation */}
        <div className="experience-list">
          {EXPERIENCES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ExpItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
