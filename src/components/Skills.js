import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    id: "dev-engineering",
    title: "Development & Engineering",
    percentage: 95,
    skills: "JavaScript/TypeScript, React/Next.js, Node.js/Express, Python, MongoDB/MySQL, C# / .NET, Kotlin, PHP"
  },
  {
    id: "product-management",
    title: "Product Management & Strategy",
    percentage: 85,
    skills: "Team Organization, Stakeholder Management, User Research, Requirements Gathering, Product Strategy, Product Roadmapping, Agile/Scrum, Data Analysis"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    percentage: 80,
    skills: "Git/GitHub, API Design & Testing, Microsoft Azure, Docker & Containers, Microservices, CI/CD Pipelines"
  },
  {
    id: "leadership",
    title: "Leadership & Team Management",
    percentage: 90,
    skills: "Technical Comm., Team Leadership, Project Management, Cross-functional Coll., Problem-Solving, Mentoring & Guidance"
  },
  {
    id: "ux-design",
    title: "UX & UI Design",
    percentage: 85,
    skills: "Figma, Responsive Design, Accessibility (WCAG), UX Design, A/B Testing, Design Systems"
  }
];

const SkillAccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`skills-accordion-item ${isOpen ? 'open' : ''}`}>
      <div 
        className="skills-accordion-header" 
        onClick={onToggle}
      >
        <span className="skills-accordion-title">
          {item.title}
        </span>
        <span className="skills-accordion-icon">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="skills-accordion-body">
              <div className="skills-accordion-text">
                {item.skills}
              </div>
              
              <div className="skills-accordion-circle">
                <div style={{ position: "relative", width: "80px", height: "80px" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle 
                      cx="40" cy="40" r="34" 
                      fill="none" 
                      stroke="rgba(0,0,0,0.08)" 
                      strokeWidth="5" 
                    />
                    <motion.circle
                      cx="40" cy="40" r="34"
                      fill="none"
                      stroke="var(--bg-dark)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="213.6"
                      strokeDashoffset="213.6"
                      initial={{ strokeDashoffset: 213.6 }}
                      animate={{ strokeDashoffset: 213.6 - (213.6 * item.percentage) / 100 }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
                    />
                  </svg>
                  <div className="skills-percentage-text-small" style={{ fontSize: "18px" }}>
                    {item.percentage}+
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Skills = () => {
  const [openId, setOpenId] = useState(SKILL_CATEGORIES[0].id);

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
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container-main">
        <div className="skills-header fade-up">
          <p className="section-label-slash">/SKILLS</p>
          <h2 className="skills-main-title">Technologies</h2>
          <p className="skills-subtitle">
            The tools and technologies I work with to build modern, scalable applications.
          </p>
        </div>

        {/* Accordion Content Area */}
        <div className="skills-accordion-container fade-up">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillAccordionItem
              key={cat.id}
              item={cat}
              isOpen={openId === cat.id}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
