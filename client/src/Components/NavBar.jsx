import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../Documents/Resume_2022.pdf';

class NavBar extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <Link to="/about"> ABOUT </Link>{" "}
                {/* <Link to="/projects"> PROJECTS</Link>{" "} */}
                <Link to="/skills"> SKILLS </Link>{" "}
                <a href={Pdf} target="_blank" rel="noopener noreferrer">RESUME</a>{" "}
            </div>
        )
    }
}
export default NavBar;