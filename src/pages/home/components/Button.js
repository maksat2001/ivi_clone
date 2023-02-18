import React from 'react';
import { Link } from 'react-router-dom';
import lightning from '../../../images/lightning.svg';
import './Button.css';


function Button() {
    return (
        <Link className='subscribe_button'>
            <img src={lightning} alt='alightning' />
            <p>30 дней подписки бесплатно</p>
        </Link>
    );
}

export default Button;