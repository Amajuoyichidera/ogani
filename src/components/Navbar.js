import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
            {/* <div className="navbar-logo">Logo</div> */}
            <img src={Logo} alt='logo' />
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <a href="#home" className="navbar-item">Home</a>
                <a href="#about" className="navbar-item">About</a>
                <a href="#services" className="navbar-item">Services</a>
                <a href="#contact" className="navbar-item">Contact</a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
  )
}

export default Navbar