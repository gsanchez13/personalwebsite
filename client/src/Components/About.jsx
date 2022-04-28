import React from 'react';

const About = (props) => {
    const aboutClass = props.aboutClass;
    return (
        <div className="about-div">
            <div className={aboutClass}>
                I was born and raised in Brooklyn and have a background in International Business from Baruch College. Growing up, I got to see how technology was slowly being integrated into our everyday, followed by the massive impact it had in changing life as we knew it. So after graduating, I decided to get into coding. I was admitted into
                <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer'> Pursuit</a>, an intestive 1 year software engineering bootcamp, where I learned programming languages like JavaScript, SQL, HTML and CSS. Currently, I am working with Citi as a Technology Analyst, where I've primarly worked on data architecture, quality and remediation. My goals for the future are to keep expanding my horizons in the tech industry, whether it is in fintech or web development, as I'd like to see how technology can push a company to success. When I'm not glued to my computer, I enjoy biking, hiking, gardening and hanging out with my dogs.
            </div>
        </div>
    )
}
export default About;