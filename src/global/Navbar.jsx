import React from 'react';
import Header from './Header';
import './Css/navbar.css'

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <nav className="navbar">
                <div className="logo-wrapper">
                    <h2 className="logo">Yacouri.</h2>
                </div>
                <div className="nav-items">
                    <ul className="ul-items">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home.</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About.</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects.</a>
                        </li>
                    </ul>
                </div>
                <div className="contact-btn-wrapper">
                    <a href="#contact" className="contact-btn">Get in touch</a>
                </div>
            </nav>
            <Header />
        </div>
    );
}

export default Navbar;
