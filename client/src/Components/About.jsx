import React, { Component } from 'react';
import { GiSoccerBall } from 'react-icons/gi';

class About extends Component {
    render() {
        return (
            <div className="about-div">
                <div className="about-blurb">
                    Born and raised in Brooklyn with a background in international business, I decided to change careers and get into coding. 
            </div>
                <br />
                <br />
                <br />
                <div className="route">
                    <span className="gif-container">
                        <GiSoccerBall className="soccer-ball" />
                    </span>
                </div>
            </div>
        )
    }
}
export default About;