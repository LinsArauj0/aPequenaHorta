// src/components/NavBar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="path/to/logo.png" alt="Logo" /> {/* Substitua pelo caminho do seu logo */}
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/product" className="nav-link">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contato</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-cart">
               <Link to="/cart" className="navbar-links-cart" ><FaShoppingCart size={22} color="#fff"/></Link> 
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
                <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
                <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};
