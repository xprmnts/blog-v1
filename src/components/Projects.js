import React from 'react';
import projects from '../content/projects.json';

const Projects = () => {
    const renderedProjects = Object.keys(projects).map(key => {
        //for odd projects
        // check if key has coming-soon tag
        return (
            <div
                key={projects[key].title}
                className={key % 2 === 0 ? 'right' : 'left'}
            >
                <a
                    href={projects[key].url ? projects[key].url : '/'}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h4>
                        <div
                            className={
                                projects[key].comingSoon === 'true'
                                    ? 'coming-soon'
                                    : ''
                            }
                        >
                            {projects[key].title}
                        </div>
                    </h4>
                    <p>{projects[key].description}</p>
                </a>
            </div>
        );
    });

    return (
        <div className='column'>
            <div className='label'>Projects</div>
            <div>{renderedProjects}</div>
        </div>
    );
};

export default Projects;
