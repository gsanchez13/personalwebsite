import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pdf from './Resume.pdf';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>{" "}
                <Link to="/about"> About </Link>{" "}
                <Link to="/projects"> Projects </Link>{" "}
                <Link to="/skills"> Skills </Link>{" "}
            </div>
        )
    }
}
export default NavBar;