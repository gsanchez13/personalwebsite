import React from 'react';
import { GiSoccerBall } from 'react-icons/gi';

const About = (props) => {
    const aboutClass = props.aboutClass;
        return (
            <div className="about-div">
                <div className={aboutClass}>
                    Born and raised in Brooklyn with a bachelors in International Business, I decided to change careers and get into coding. I was admitted into 
                    <a href='https://www.pursuit.org/' target='_blank' rel='noopener noreferrer'> Pursuit</a>, where I learned programming languages like JavaScript, SQL, HTML and CSS. Currently, I am working with Citi as a Technology Analyst. I've focused on projects like the Data Consumption Workbench, which focuses on pulling data from Citi's internal databases and creating financial dashboards using BI tools such as PowerBI, Arcadia and KNIME. Similarly, I've worked with Snowflake to create a Proof of Concept to pull data into the cloud and work on data transformation. I've also worked on the Retail Data Services team at Citi, where I focused on script reductions and data quality issues, as well as data remediations. My goals for the future include working in technology and expanding my horizons in the industry, whether it is in fintech or web development, I'd like to see how technology can push a company to success.
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