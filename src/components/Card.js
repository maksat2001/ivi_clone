import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from '../images/cardImg.jfif';
import './Card.css';

function Card() {
    return (
        <Link className='card_container'>
            <div className='card_image_container'>
                <div className='card_badge'>
                    выбор Иви
                </div>
                <div className='card_image'>
                    <img src={cardImage} alt='cardImage' />
                </div>
                <div className='card_hover_container'>
                </div>
            </div>
            <div className='card_name_container'>
                <p className='movie_name'>Три богатыря и Наследница престола</p>
            </div>
        </Link>
    );
}

export default Card;