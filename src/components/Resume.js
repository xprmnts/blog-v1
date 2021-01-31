import React from 'react';
import '../css/resume.css';
import resume from '../content/resume.json';

const Resume = () => {
    const renderResumeItems = Object.keys(resume).map(key => {
        return (
            <li key={key}>
                <div className='date'>{resume[key].date}</div>
                <div className='role'>{resume[key].role}</div>
                <div className='company'>{resume[key].company}</div>
            </li>
        );
    });
    return (
        <div className='right'>
            <div className='resume'>
                <div className='label'>Brief history in time</div>
                <ul>{renderResumeItems}</ul>
            </div>
        </div>
    );
};

export default Resume;
