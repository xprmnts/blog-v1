import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='small'>
                    <h3>
                        In my spare time I read books, practice meditation, play
                        board games, travel and work on side projects.
                    </h3>
                    <div className='social'>
                        <ul>
                            <li className='icons'>
                                <a href='https://www.linkedin.com/in/abhinay-reddy/'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li className='icons'>
                                <a href='https://github.com/xprmnts'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li className='icons'>
                                <a href='mailto:abhinay@outlook.com'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
