import React, { Component } from 'react';
class Projects extends Component {
    render() {
        const projectThumbnails = [
            {
                projectName: 'Carry',
                source: require('../carry-landing.png'),
                codeLink: 'https://github.com/tbriany/Carry'
            },
        ]
        const projectCards = projectThumbnails.map((thumbnail) => {
            return (
                <div className='project-card' key={thumbnail.projectName}>
                    <img src={thumbnail.source} alt={thumbnail.projectName} className='project-image' />
                    <div className='project-overlay'>
                        <a href={thumbnail.codeLink} target="_self" className='project-link'>Code</a>
                    </div>
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