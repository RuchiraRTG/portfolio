import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <>
      {/* Giant Name split between Contact (white/gray) and Footer (black) */}
      <div className="footer-giant-wrapper">
        <h1 className="giant-name top-text">RUCHIRA</h1>
        <h1 className="giant-name bottom-text">RUCHIRA</h1>
      </div>

      <footer className="footer-modern">
        <div className="footer-container">

          {/* Left Side: Connect & Tagline */}
          <div className="footer-left">
            <p className="footer-connect-title">Connected with me</p>
            <div className="footer-social-new">
              <a href="https://www.linkedin.com/in/ruchiratharupathi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/RuchiraRTG" target="_blank" rel="noreferrer" aria-label="GitHub">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/ruchiratg_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p className="footer-tagline">
              I transform innovative ideas into reality<br />
              through thoughtful design and meaningful code.
            </p>
          </div>

          {/* Right Side: Links & Copyright */}
          <div className="footer-right">
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#connect">Contact</a>
            </div>
            <p className="footer-copy-new">
              Copyright © Ruchira Tharupathi {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};
