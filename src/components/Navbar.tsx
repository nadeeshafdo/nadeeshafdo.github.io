import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-content">
        <a href="#" className="logo">Nadeesha Fernando</a>
        <nav className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
