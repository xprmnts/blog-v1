import React from 'react';
import '../css/header.css';
import { name, tag } from '../content/header.json';

const Header = () => {
    return (
        <div className='page-title'>
            <h1>{name}</h1>
            <h2>{tag}</h2>
        </div>
    );
};

export default Header;
