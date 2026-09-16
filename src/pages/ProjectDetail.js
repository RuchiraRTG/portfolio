import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { usePageTransition } from "../context/PageTransitionContext";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const idNum = parseInt(projectId, 10);
  const project = projectsData.find((p) => p.id === idNum);

  // Find next project for bottom navigation
  const currentIndex = projectsData.findIndex((p) => p.id === idNum);
  const nextProject =
    currentIndex !== -1
      ? projectsData[(currentIndex + 1) % projectsData.length]
      : null;
  const prevProject =
    currentIndex !== -1
      ? projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleBack = (e) => {
    e.preventDefault();
    const clickX = e.clientX || window.innerWidth / 2;
    const clickY = e.clientY || 60;
    startTransition({
      x: clickX,
      y: clickY,
      targetUrl: "/",
    });
  };

  const handleNavigateProject = (e, targetProject) => {
    e.preventDefault();
    const clickX = e.clientX || window.innerWidth / 2;
    const clickY = e.clientY || window.innerHeight / 2;
    startTransition({
      x: clickX,
      y: clickY,
      targetUrl: `/project/${targetProject.id}`,
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The requested project ID does not exist in the portfolio.</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
        >
          ← Return to Portfolio
        </button>
      </div>
    );
  }

  // Staggered Item Animation variants
  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0e0e0e] text-white overflow-x-hidden selection:bg-black selection:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── Top Floating Navigation Bar ──────────────────────────────────────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0e0e]/80 border-b border-white/10 px-6 sm:px-12 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-white">{project.category}</span>
            <span>/</span>
            <span style={{ color: project.bg }}>{project.title}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                title="View Source Code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105"
                style={{ backgroundColor: project.bg, color: project.color }}
              >
                <span>Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ── Large Colored Hero Section ────────────────────────────────────────── */}
      <section
        className="relative pt-20 pb-24 px-6 sm:px-12 transition-colors duration-700 overflow-hidden"
        style={{ backgroundColor: project.bg, color: project.color }}
      >
        {/* Subtle decorative grid/watermark in hero */}
        <div
          className="absolute -right-10 -bottom-20 text-[180px] sm:text-[260px] font-black opacity-[0.07] pointer-events-none select-none tracking-tighter leading-none"
        >
          0{project.id}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemFadeUp} className="flex items-center gap-3 mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-current/20 bg-white/20 backdrop-blur-sm"
            >
              / {project.category}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase opacity-70">
              Year {project.year}
            </span>
          </motion.div>

          <motion.h1
            variants={itemFadeUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={itemFadeUp}
            className="text-lg sm:text-2xl md:text-3xl max-w-4xl font-medium leading-relaxed opacity-90 mb-12"
          >
            {project.subtitle || project.description}
          </motion.p>

          {/* Project Meta Details Strip */}
          <motion.div
            variants={itemFadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-current/15 text-sm"
          >
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-60 mb-1">Role</p>
              <p className="font-extrabold text-base">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-60 mb-1">Client</p>
              <p className="font-extrabold text-base">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-60 mb-1">Timeline</p>
              <p className="font-extrabold text-base">{project.year} · Complete</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-60 mb-1">Stack</p>
              <p className="font-extrabold text-base truncate">
                {project.technologies ? project.technologies.slice(0, 3).join(", ") : "React, Node.js"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Visual Showcase (Project Image) ─────────────────────────── */}
      <section className="px-6 sm:px-12 -mt-12 sm:-mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemFadeUp}
            className="rounded-[32px] overflow-hidden bg-[#161616] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.6)] group"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Dummy Statistics & Impact Metrics ─────────────────────────────────── */}
      <section className="px-6 sm:px-12 py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">
              / Impact & Metrics
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Measurable Project Results
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stats &&
              project.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemFadeUp}
                  className="rounded-2xl p-8 bg-[#161616] border border-white/10 hover:border-white/25 transition-all duration-300 relative overflow-hidden group"
                >
                  <div
                    className="w-2 h-2 rounded-full mb-6"
                    style={{ backgroundColor: project.bg }}
                  />
                  <div
                    className="text-4xl sm:text-5xl font-black tracking-tight mb-2 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: project.bg }}
                  >
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ── In-Depth Project Narrative & Tech Details ─────────────────────────── */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">
                / Project Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
                Overview & Objectives
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-normal">
                {project.overview || project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="rounded-2xl p-8 bg-[#141414] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.challenges ||
                    "Developing a resilient architecture capable of scaling smoothly during spikes in user activity while maintaining real-time synchronization across clients."}
                </p>
              </div>

              <div className="rounded-2xl p-8 bg-[#141414] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.solution ||
                    "Implemented modular micro-components, optimistic UI states, automated testing pipelines, and responsive mobile-first views with sub-second response times."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar Details Column */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {/* Tech Stack Cloud */}
            <div className="rounded-3xl p-8 bg-[#141414] border border-white/10">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-gray-400 mb-6">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies &&
                  project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/15 bg-white/5 text-gray-200 hover:border-white/40 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            {/* Quick Contact Callout */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden text-black"
              style={{ backgroundColor: project.bg }}
            >
              <h3 className="text-2xl font-extrabold mb-3 leading-tight" style={{ color: project.color }}>
                Need a similar solution built?
              </h3>
              <p className="text-sm opacity-80 mb-6 font-medium" style={{ color: project.color }}>
                Let's discuss how we can turn your vision into a scalable, high-performance product.
              </p>
              <button
                onClick={handleBack}
                className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-black text-white hover:bg-gray-800 transition-colors shadow-lg"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next / Prev Project Navigator ─────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          {prevProject && (
            <button
              onClick={(e) => handleNavigateProject(e, prevProject)}
              className="group flex items-center gap-4 text-left"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                ←
              </div>
              <div>
                <p className="text-[11px] uppercase font-mono tracking-wider text-gray-500">Previous Project</p>
                <p className="text-lg font-bold text-white group-hover:underline">{prevProject.title}</p>
              </div>
            </button>
          )}

          <button
            onClick={handleBack}
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-sm font-bold tracking-wider transition-all uppercase"
          >
            All Projects
          </button>

          {nextProject && (
            <button
              onClick={(e) => handleNavigateProject(e, nextProject)}
              className="group flex items-center gap-4 text-right"
            >
              <div>
                <p className="text-[11px] uppercase font-mono tracking-wider text-gray-500">Next Project</p>
                <p className="text-lg font-bold text-white group-hover:underline">{nextProject.title}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </button>
          )}
        </div>
      </footer>
    </motion.div>
  );
};
