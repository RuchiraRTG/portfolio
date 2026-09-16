import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsData } from "../data/projectsData";
import { usePageTransition } from "../context/PageTransitionContext";

gsap.registerPlugin(ScrollTrigger);

const WRAPPER_W = 1300;
const WRAPPER_H = 880;

export const Projects = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(null);
  const { startTransition } = usePageTransition();

  const handleCardClick = (e, project) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = typeof e.clientX === "number" && e.clientX > 0 ? e.clientX : rect.left + rect.width / 2;
    const clickY = typeof e.clientY === "number" && e.clientY > 0 ? e.clientY : rect.top + rect.height / 2;

    startTransition({
      x: clickX,
      y: clickY,
      targetUrl: `/project/${project.id}`,
    });
  };

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Create the timeline that will unfold the cards once
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 45%", // Trigger when the wrapper enters 45% of the viewport (more delayed)
          toggleActions: "play none none none", // Play once, don't reverse
          once: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const pd = projectsData[i];

        // Calculate the offsets to place the card in the absolute center of the wrapper
        const cx = pd.left + pd.width / 2;
        const cy = pd.top + pd.height / 2;

        const dx = (WRAPPER_W / 2) - cx;
        const dy = (WRAPPER_H / 2) - cy;

        // Set initial stacked position
        gsap.set(card, {
          x: dx,
          y: dy,
          rotation: i % 2 === 0 ? -4 : 5, // slight random stack rotation
        });

        // Animate to their natural top/left position with correct rotation
        tl.to(
          card,
          {
            x: 0,
            y: 0,
            rotation: pd.rotate,
            duration: 1.5,
            ease: "power3.out",
          },
          i * 0.08 // Stagger start times slightly for a more satisfying unfold
        );
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#f5f3ef] py-24 flex flex-col items-center overflow-hidden"
    >
      {/* Desktop Heading & Layout */}
      <div className="hidden md:block w-full max-w-[1400px] mb-20 relative">
        <div
          className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-[140px] font-extrabold text-[#e8e6e1] uppercase tracking-tighter pointer-events-none z-0"
          style={{ lineHeight: 1 }}
        >
          PORTFOLIO
        </div>

        <div className="relative z-10 flex items-end justify-between px-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase mb-1">
              / SELECTED WORK
            </p>
            <h2 className="text-[72px] font-extrabold tracking-tighter text-gray-900 leading-none mb-6">
              Projects
            </h2>
          </div>

          <button className="mb-2 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm text-gray-900 text-sm font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
            View All Work
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Heading */}
      <div className="md:hidden w-full px-5 mb-10">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-2">
          / Selected Work
        </p>
        <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900">Projects</h2>
      </div>

      {/* ── Centered card cluster wrapper (Desktop) ────────────────────────── */}
      <div
        ref={wrapperRef}
        className="relative mx-auto hidden md:block"
        style={{ width: WRAPPER_W, height: WRAPPER_H }}
      >
        {projectsData.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[i] = el)}
            onMouseEnter={() => setActiveCard(project.id)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={(e) => handleCardClick(e, project)}
            role="button"
            tabIndex={0}
            className="absolute rounded-[24px] overflow-hidden cursor-pointer transition-shadow duration-300 group bg-[#111111]"
            style={{
              top: project.top,
              left: project.left,
              width: project.width,
              height: project.height,
              zIndex: activeCard === project.id ? 50 : i + 1,
              boxShadow:
                activeCard === project.id
                  ? "0 28px 60px rgba(0,0,0,0.4)"
                  : "0 8px 28px rgba(0,0,0,0.2)",
            }}
          >
            {/* Colored Background Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500 z-0 opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: project.bg }}
            />

            {/* Hover Scale Wrapper */}
            <div className="w-full h-full flex flex-col relative z-10 transition-transform duration-300 ease-out group-hover:scale-105">
              {/* Card header */}
              <div className="relative h-[37%] w-full flex-shrink-0">
                {/* Default State (White text) */}
                <div className="absolute inset-0 px-5 pt-5 flex justify-between items-start transition-opacity duration-500 group-hover:opacity-0">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60 text-gray-400">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-extrabold leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Hover State (Colored text & Arrow) */}
                <div className="absolute inset-0 px-5 pt-5 flex justify-between items-start transition-opacity duration-500 opacity-0 group-hover:opacity-100">
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
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 scale-50 -translate-y-2 group-hover:scale-100 group-hover:translate-y-0"
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
                  </div>
                </div>
              </div>

              {/* Project image with grayscale effect */}
              <div className="relative flex-grow w-full z-0 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile Layout ──────────────────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-5 px-5 w-full">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={(e) => handleCardClick(e, project)}
            role="button"
            tabIndex={0}
            className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative bg-[#111111]"
          >
            {/* Colored Background Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500 z-0 opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: project.bg }}
            />

            <div className="relative z-10 flex flex-col">
              {/* Header */}
              <div className="relative h-24 w-full flex-shrink-0">
                {/* Default State */}
                <div className="absolute inset-0 p-5 transition-opacity duration-500 group-hover:opacity-0">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-60 text-gray-400">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-extrabold mb-3 text-white">
                    {project.title}
                  </h3>
                </div>
                {/* Hover State */}
                <div className="absolute inset-0 p-5 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-60" style={{ color: project.color }}>
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-extrabold mb-3" style={{ color: project.color }}>
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="w-full h-52 relative overflow-hidden flex-grow">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
