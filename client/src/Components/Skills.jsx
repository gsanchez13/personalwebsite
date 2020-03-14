import React, { Component } from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiPostgresql, DiJavascript1, DiCss3 } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';

class Skills extends Component {
    render() {
        const iconArr = [
            {
                icon: FaReact,
                color: "rgb(104, 241, 241)",
                caption: "React",
                class: "iconClass"
            },
            {
                icon: FaNodeJs,
                color: "darkblue",
                caption: "NodeJS",
                class: "iconClass"
            }, {
                icon: FaGitAlt,
                color: "darkgreen",
                caption: "Git",
                class: "iconClass"
            }, {
                icon: DiPostgresql,
                color: "teal",
                caption: "Postgres",
                class: "iconClass"
            }, {
                icon: DiJavascript1,
                color: "rgb(177, 160, 7)",
                caption: "darkyellow",
                class: "iconClass"
            }, {
                icon: TiHtml5,
                color: "darkorange",
                caption: "HTML5",
                class: "iconClass"
            },
            {   
                icon: DiCss3,
                color: "lightblue",
                caption: "CSS3",
                class: "iconClass" 
            }
        ]
        const jsxIcons = iconArr.map((el) => {
            return (
                <div className="skills-icon-card">
                    <el.icon style={{color: el.color}} className={el.class}/>
                    <p>{el.caption}</p>
                </div>
            )
        })
        return (
            <div className="skills-div">
                {jsxIcons}
            </div>
        )
    }
}
export default Skills;