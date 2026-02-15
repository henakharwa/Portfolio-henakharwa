import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT (desktop only) */}
        <ul className="nav-links left desktop-only">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
        </ul>

        {/* CENTER LOGO */}
        <h2 className="logo">
          <a href="#home" className="logo-link" onClick={closeMenu}>
            Hena Kharwa
          </a>
        </h2>

        {/* RIGHT (desktop only) */}
        <ul className="nav-links right desktop-only">
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#leadership" onClick={closeMenu}>Leadership</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* HAMBURGER (mobile only) */}
        <button
          className="hamburger mobile-only"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul className="mobile-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#leadership" onClick={closeMenu}>Leadership</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>

      {/* BACKDROP */}
      {open && <div className="backdrop" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
