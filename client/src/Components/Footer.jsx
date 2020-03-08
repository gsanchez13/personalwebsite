import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io'

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <FaLinkedin />
                <AiOutlineMail />
                <IoLogoGithub />
            </div>
        )
    }
}
export default Footer;