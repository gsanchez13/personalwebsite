import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pdf from './Resume.pdf';

class NavBar extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <a href={Pdf} target="_blank" rel="noopener noreferrer">RESUME</a>{" "}
                <Link to="/about"> ABOUT </Link>{" "}
                <Link to="/projects"> PROJECTS</Link>{" "}
                <Link to="/skills"> SKILLS </Link>{" "}
            </div>
        )
    }
}
export default NavBar;