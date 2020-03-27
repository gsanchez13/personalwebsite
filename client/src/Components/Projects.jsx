import React, { Component } from 'react';
class Projects extends Component {
    render() {
        const projectThumbnails = [
            require('../example1.jpeg'),
            require('../example2.jpeg'),
            require('../example3.jpeg'),
        ]
        const projectCard = (thumbnails) => {

        }
        return (
            <div className="projects-div">
                <a href="https://github.com/gsanchez13/ethicattire_hackathon" target="_self" className="project-code">Ehtic Attire</a>
                <a href="https://github.com/gsanchez13/marathoner_movieapp" target="_self" className="project-code">Marathoner</a>
                <a href="https://github.com/gsanchez13/ghibli_movieapp" target="_self" className="project-code">Ghibli Movieapp</a>
            </div>
        )
    }
}
export default Projects;