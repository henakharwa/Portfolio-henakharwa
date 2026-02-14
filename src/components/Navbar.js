import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links left">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <h2 className="logo">Hena Kharwa</h2>

      <ul className="nav-links right">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#contact">Contact</a></li>
        

      </ul>
    </nav>
  );
};

export default Navbar;
