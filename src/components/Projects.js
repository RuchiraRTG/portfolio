import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import salonPabaluImg from "../assets/img/salon pabalu.png";
import jobexpert from "../assets/img/job expert .png";
import skillImg from "../assets/img/skill.png";
import todoImg from "../assets/img/todo.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

// Positions in px, relative to a centered 1300px-wide wrapper
const projectsData = [
  {
    id: 1,
    title: "Salon Pabalu",
    category: "Web Development",
    img: salonPabaluImg,
    rotate: -9,
    top: 30,
    left: 0,
    width: 305,
    height: 410,
    bg: "#E8C5B4",
    color: "#5a2a10",
  },
  {
    id: 2,
    title: "JOB Expert",
    category: "Full Stack App",
    img: jobexpert,
    rotate: 5,
    top: 100,
    left: 330,
    width: 290,
    height: 395,
    bg: "#E8E8C5",
    color: "#3a3a10",
  },
  {
    id: 3,
    title: "EduFlow",
    category: "Education Platform",
    img: skillImg,
    rotate: -4,
    top: 10,
    left: 650,
    width: 283,
    height: 388,
    bg: "#C5D8E8",
    color: "#0f2f4a",
  },
  {
    id: 4,
    title: "Business Startup",
    category: "Landing Page",
    img: projImg2,
    rotate: 7,
    top: 50,
    left: 980,
    width: 293,
    height: 398,
    bg: "#F5C6D8",
    color: "#5a1030",
  },
  {
    id: 5,
    title: "TODO App",
    category: "Android · Kotlin",
    img: todoImg,
    rotate: -6,
    top: 410,
    left: 170,
    width: 298,
    height: 402,
    bg: "#C8E8C5",
    color: "#1a4a10",
  },
  {
    id: 6,
    title: "Business Portal",
    category: "Web Application",
    img: projImg3,
    rotate: 8,
    top: 400,
    left: 700,
    width: 290,
    height: 392,
    bg: "#D5C5E8",
    color: "#2f105a",
  },
];

// Width and height of the centered card cluster wrapper
const WRAPPER_W = 1300;
const WRAPPER_H = 880;


export const Projects = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseEnter = (id) => setActiveCard(id);
  const handleMouseLeave = () => setActiveCard(null);

  // ── Mobile ──────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="py-20 px-5 bg-[#f5f3ef]" id="projects">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-2">
            / Selected Work
          </p>
          <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900">Projects</h2>
        </div>
        <div className="flex flex-col gap-5">
          {projectsData.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="rounded-3xl overflow-hidden shadow-md"
              style={{ backgroundColor: p.bg }}
            >
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>
                  {p.category}
                </p>
                <h3 className="text-2xl font-extrabold mb-3" style={{ color: p.color }}>
                  {p.title}
                </h3>
              </div>
              <div className="w-full h-52 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop ─────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#f5f3ef] py-24 flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <div className="w-full max-w-[1400px] mb-20 relative">
        {/* Giant faded PORTFOLIO background text */}
        <div 
          className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-[140px] font-extrabold text-[#e8e6e1] uppercase tracking-tighter pointer-events-none z-0"
          style={{ lineHeight: 1 }}
        >
          PORTFOLIO
        </div>

        <div className="relative z-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase mb-1">
              / SELECTED WORK
            </p>
            <h2 className="text-[72px] font-extrabold tracking-tighter text-gray-900 leading-none mb-6">
              Projects
            </h2>
          </div>

          {/* View All Work button */}
          <button className="mb-2 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-gray-900 text-sm font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
            View All Work
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Centered card cluster wrapper ────────────────────────────────────── */}
      <div
        className="relative mx-auto"
        style={{ width: WRAPPER_W, height: WRAPPER_H }}
      >
        {projectsData.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 80, rotate: project.rotate * 0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: project.rotate }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 13,
              delay: i * 0.1,
            }}
            whileHover={{
              scale: 1.07,
              rotate: project.rotate * 0.2,
              zIndex: 50,
              transition: { type: "spring", stiffness: 220, damping: 15 },
            }}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            className="absolute rounded-[24px] overflow-hidden cursor-pointer"
            style={{
              top: project.top,
              left: project.left,
              width: project.width,
              height: project.height,
              backgroundColor: project.bg,
              zIndex: activeCard === project.id ? 40 : i + 1,
              boxShadow:
                activeCard === project.id
                  ? "0 28px 60px rgba(0,0,0,0.22)"
                  : "0 8px 28px rgba(0,0,0,0.13)",
            }}
          >
            {/* Card header */}
            <div className="px-5 pt-5 pb-3 flex justify-between items-start">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60"
                  style={{ color: project.color }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-lg font-extrabold leading-tight"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Arrow on hover */}
              <motion.div
                animate={{
                  opacity: activeCard === project.id ? 1 : 0,
                  scale: activeCard === project.id ? 1 : 0.4,
                  y: activeCard === project.id ? 0 : -8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: project.color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={project.bg}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </motion.div>
            </div>

            {/* Project image */}
            <div className="absolute bottom-0 left-0 right-0" style={{ height: "63%" }}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
