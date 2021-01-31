import React from 'react';
import '../css/resume.css';
import resume from '../content/resume.json';
import skills from '../content/skills.json';
import { ReactComponent as Koi } from '../images/koi.svg';

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
    const renderSkillItems = Object.keys(skills).map(key => {
        return (
            <li key={key}>
                <div className='skill'>{skills[key]}</div>
            </li>
        );
    });
    return (
        <div className='right'>
            <div className='resume'>
                <div className='label'>Brief history in time</div>
                <ul>{renderResumeItems}</ul>
                <div className='seagulls'>
                    <Koi />
                </div>
                <div className='label'>Skills</div>
                <ul>{renderSkillItems}</ul>
            </div>
        </div>
    );
};

export default Resume;
