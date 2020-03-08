import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Link to="/resume"> Resume </Link>{" "}
                <Link to="/about"> About </Link>{" "}
                <Link to="/projects"> Projects </Link>{" "}
                <Link to="/skills"> Skills </Link>{" "}
            </div>
        )
    }
}
export default NavBar;