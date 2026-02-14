import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Hena. All rights reserved.</p>
        <div className="social-icons">
          <a href="mailto:henakharwa@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/hena-kharwa-0ab779214" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/henakharwa" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://medium.com/@20ce043" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
