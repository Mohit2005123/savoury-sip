import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white text-black mt-5 p-4">
      <hr />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <span>© 2024 SAVORY SIP</span>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <a href="https://facebook.com" className="text-black mx-2 social-icon" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-black mx-2 social-icon" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-black mx-2 social-icon" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-black mx-2 social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

