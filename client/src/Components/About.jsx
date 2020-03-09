import React, { Component } from 'react';
import { GiSoccerBall } from 'react-icons/gi';

class About extends Component {
    render() {
        return (
            <div className="about-div"> 
                <br/>
                <br/>
                <br/>
                <span className="gif-container">
                <GiSoccerBall className="soccer-ball"/>
                </span>
            </div>
        )
    }
}
export default About;