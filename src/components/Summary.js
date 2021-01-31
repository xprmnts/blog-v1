import React from 'react';
import summary from '../content/summary.json';

const Summary = () => {
    const renderedParagraph = Object.keys(summary).map(key => {
        return <p key={key}>{summary[key].paragraph}</p>;
    });
    return <div className='left'>{renderedParagraph}</div>;
};

export default Summary;
