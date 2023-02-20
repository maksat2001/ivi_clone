import React from 'react';
import { Link } from 'react-router-dom';
import cardImage from '../images/cardImg.jfif';
import './Card.css';

function Card() {
    return (
        <Link className='card_container'>
            <div className='card_image_container'>
                <div className='card_badge card_badge_ivi'>
                    выбор Иви
                </div>
                {/* <div className='card_badge card_badge_exclusive'>
                    эксклюзив
                </div> */}
                <div className='card_image'>
                    <img src={cardImage} alt='cardImage' />
                </div>
                <div className='card_hover_container'>
                    salam
                </div>
            </div>
            <div className='card_name_container'>
                <p className='movie_name'>Три богатыря и Наследница престола</p>
                <p className='movie_padpiska'>Бесплатно</p>
            </div>
        </Link>
    );
}

export default Card;