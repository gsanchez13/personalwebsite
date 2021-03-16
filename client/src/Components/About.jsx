import React from 'react';
import { GiSoccerBall } from 'react-icons/gi';

const About = (props) => {
    const aboutClass = props.aboutClass;
        return (
            <div className="about-div">
                <div className={aboutClass}>
                    Born and raised in Brooklyn with a background in International Business, I decided to change careers and get into coding. I was admitted into 
                    <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer'> Pursuit</a>, where I learned programming languages like JavaScript, SQL, HTML and CSS. Currently, I am working with Citi as a Technology Analyst. In my free time, I enjoy playing soccer, cycling, reading, traveling and trying any new sport or hobby. As a Full-Stack Web Developer, I look forward to working on projects with energy, passion and an open mind (+= a cup of coffee)!
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