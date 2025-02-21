import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">John Jamieson</Link>
            </div>
            <div className="navbar-links">
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    );
};

export default NavBar;
