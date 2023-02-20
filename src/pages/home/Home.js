import React from 'react';
import './Home.css';

import Button from './components/Button';
import CardGroup from './components/CardGroup';

function Home() {
    return (
        <div className='home_container'>
            <Button />
            <CardGroup />
        </div>
    );
}

export default Home;