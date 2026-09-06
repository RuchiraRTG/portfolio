import { useState, useRef, useEffect } from "react";
import profile from "../assets/img/Abstract Profile Photo Instagram Post.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send Message");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully!' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again.' });
      }
    } catch (err) {
      setButtonText("Send Message");
      setStatus({ success: false, message: 'Failed to send. Please email me directly.' });
    }
  };

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section className="contact-section" id="connect" ref={sectionRef}>
      <div className="container-main">
        {/* CTA Header */}
        <div className="fade-up">
          <div className="contact-available-badge">
            <span className="contact-available-dot"></span>
            Available for New Project
          </div>
        </div>

        <h2 className="contact-main-title fade-up stagger-1">
          Have a Project<br />in Mind?
        </h2>

        <p className="contact-subtitle fade-up stagger-2">
          Together, we can create something great and impactful.
          Let's collaborate to bring your ideas to life.
        </p>

        <a href="mailto:ruchiratharupathi@gmail.com" className="contact-cta-btn fade-up stagger-3">
          Contact Me
          <span className="arrow">↗</span>
        </a>

        {/* Contact Form */}
        <div className="contact-form-wrap fade-up stagger-4">
          <h3 className="contact-form-title">Send a Message</h3>
          <p className="contact-form-sub">I'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="Your first name"
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  id="contact-firstName"
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Your last name"
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  id="contact-lastName"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="your@email.com"
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  id="contact-email"
                />
              </div>
              <div className="form-group">
                <label>Phone (Optional)</label>
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="+94 XX XXX XXXX"
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                  id="contact-phone"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                value={formDetails.message}
                placeholder="Tell me about your project..."
                onChange={(e) => onFormUpdate('message', e.target.value)}
                id="contact-message"
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn" id="contact-submit">
              {buttonText}
            </button>
            {status.message && (
              <p className={status.success ? "success" : "danger"} style={{ marginTop: '12px', fontSize: '14px' }}>
                {status.message}
              </p>
            )}
          </form>
        </div>

        {/* Social Pill Row */}
        <div className="contact-social-row fade-up">
          <div className="contact-name-pill">
            <img src={profile} alt="Ruchira" />
            Ruchira Tharupathi
          </div>
          <a href="https://github.com/RuchiraRTG" target="_blank" rel="noreferrer" className="contact-social-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ruchiratharupathi/" target="_blank" rel="noreferrer" className="contact-social-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/ruchiratg_/" target="_blank" rel="noreferrer" className="contact-social-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
