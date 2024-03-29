import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io';
import { GoFile } from 'react-icons/go';
import Pdf from '../Documents/Resume_2022.pdf';

class Footer extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <a href="https://www.linkedin.com/in/gsanchez13/" target="_self" rel="noopener norefferrer">
                    <FaLinkedin /></a>
                <a href="mailto:gisellesanchez@pursuit.org?subject=Let's get in contact&body=Hello">
                <AiOutlineMail />
                </a>
                <a href="https://github.com/gsanchez13" target="_self" rel="noopener norefferrer">
                    <IoLogoGithub />
                </a>
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                    <GoFile />
                </a>
            </div>
        )
    }
}
export default Footer;