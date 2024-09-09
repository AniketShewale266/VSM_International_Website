import React, { useState } from 'react';
import './App.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo1.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                {/* <img src={logo} alt="VSM International" srcset="" /> */}
                <NavLink to='/'>VSM International</NavLink>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* This is a simple hamburger icon using the HTML entity */}
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
                <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-brown" : "nav-link"
                }

                onClick={toggleMenu}
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "text-brown" : "nav-link"
                }
                onClick={toggleMenu}
                >
                About
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/products"
                className={({ isActive }) =>
                    isActive ? "text-brown" : "nav-link"
                }
                onClick={toggleMenu}
                >
                Products
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "text-brown" : "nav-link"
                }
                onClick={toggleMenu}
                >
                Contact
                </NavLink>
            </li>
            </ul>
        </nav>
    );
};

export default NavBar;
