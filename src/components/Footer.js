import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="footer-center">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ruchira-tharupathi-0b9b6334b/"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://www.facebook.com/share/1758kj952M/?mibextid=wwXIfr"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/ruchira__0524?igsh=MWJzbGZveGNseXhzNg%3D%3D&utm_source=qr"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p> © 2025 Ruchira tharupathi. Copyright 2025. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
