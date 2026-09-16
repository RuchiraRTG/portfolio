import { useState, useEffect } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Available Badge */}
          <div className="available-badge">
            <span className="available-dot"></span>
            Available for New Project
          </div>

          {/* Nav Links */}
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('home')}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeLink === 'skills' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeLink === 'experience' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#connect"
                className={activeLink === 'connect' ? 'active' : ''}
                onClick={() => onUpdateActiveLink('connect')}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Let's Talk Button */}
          <a href="#connect" className="lets-talk-btn" onClick={() => onUpdateActiveLink('connect')}>
            Let's Talk
            <span className="arrow-icon">↗</span>
          </a>

          {/* Hamburger */}
          <div className="navbar-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => onUpdateActiveLink('home')}>Home</a>
          <a href="#skills" onClick={() => onUpdateActiveLink('skills')}>Skills</a>
          <a href="#projects" onClick={() => onUpdateActiveLink('projects')}>Projects</a>
          <a href="#experience" onClick={() => onUpdateActiveLink('experience')}>Experience</a>
          <a href="#connect" onClick={() => onUpdateActiveLink('connect')}>Contact</a>
        </div>
      </nav>
  );
};
