import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-inner">
        <span className="footer-name">Ruchira Tharupathi</span>
        <p className="footer-copy">© 2026 Ruchira Tharupathi. All Rights Reserved.</p>
        <div className="footer-social">
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
      </div>
    </footer>
  );
};
