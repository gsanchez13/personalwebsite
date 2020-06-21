import React from 'react';
import { GiSoccerBall } from 'react-icons/gi';

const About = (props) => {
    const aboutClass = props.aboutClass;
        return (
            <div className="about-div">
                <div className={aboutClass}>
                    Born and raised in Brooklyn with a background in International Business, I decided to change careers and get into coding. I was admitted into 
                    <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer'> Pursuit </a>where I learned programming languages like JavaScript, SQL, HTML and CSS. I enjoy playing soccer, cycling, reading and playing the ukulele when I'm not coding. As a full-stack web developer, I look forward to working on projects with energy, passion and an open mind! 
            </div>
                <br />
                <div className="route">
                    <span className="gif-container">
                        <GiSoccerBall className="soccer-ball" />
                    </span>
                </div>
            </div>
        )
}
export default About;