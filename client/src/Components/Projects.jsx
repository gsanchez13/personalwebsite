import React, { Component } from 'react';
class Projects extends Component {
    render() {
        const projectThumbnails = [
            {
                source: require('../example1.jpeg'),
                codeLink: 'https://github.com/gsanchez13/ethicattire_hackathon'
            },
            {
                source: require('../example2.jpeg'),
                codeLink: 'https://github.com/gsanchez13/marathoner_movieapp'
            },{
                source: require('../example3.jpeg'),
                codeLink: 'https://github.com/gsanchez13/ghibli_movieapp'
            },
        ]
        const projectCards = projectThumbnails.map((thumbnail) => {
            return (
                <div className='project-card'>
                    <img src={thumbnail.source} alt='example' />
                    <a href={thumbnail.codeLink} target="_self" className='project-link'>Code</a>
                </div>
        )  
        })

        return (
            <div className="projects-div">
                {projectCards}
            </div>
        )
    }
}
export default Projects;