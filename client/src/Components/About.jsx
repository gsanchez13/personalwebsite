import React, { Component } from 'react';
import { GiSoccerBall } from 'react-icons/gi';

class About extends Component {
    render() {
        return (
            <div className="about-div">
                <div className="about-blurb">
                    I am a born and raised Brooklyner who loves soccer, biking, swimming, dogs, food and all the sunshine I can get.
                <br />I write code and make cool things happen. Reach out!
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