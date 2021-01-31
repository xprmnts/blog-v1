import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Resume from './Resume';

import '../css/main.css';

const App = () => {
    return (
        <div className='container'>
            <div className='small'>
                <Header />
                <div className='column'>
                    <Summary />
                    <Resume />
                </div>
            </div>
        </div>
    );
};

export default App;
