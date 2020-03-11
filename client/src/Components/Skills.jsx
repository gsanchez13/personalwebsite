import React, { Component } from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiPostgresql, DiJavascript1 } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';

class Skills extends Component {
    render() {
        return (
            <div className="skills-div">
                <FaReact />
                <FaNodeJs />
                <DiPostgresql/>
                <DiJavascript1/>
                <TiHtml5/>
                <FaGitAlt/>
            </div>
        )
    }
}
export default Skills;