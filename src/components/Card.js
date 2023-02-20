import React from 'react';
import { Progress } from 'antd';
import { Link } from 'react-router-dom';
import cardImage from '../images/cardImg.jfif';
import './Card.css';
import { BookmarkRegular, ProhibitedRegular, StarRegular, WandRegular } from '@fluentui/react-icons';

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
                    <div className='hover_container_right'>
                        <BookmarkRegular className='hover_icon' />
                        <WandRegular className='hover_icon' />
                        <StarRegular className='hover_icon' />
                        <ProhibitedRegular className='hover_icon' />
                    </div>
                    <div className='hover_container_left'>
                        <div className='card_grade_container'>
                            <p>8,2</p>
                            <div className='progress_bars_container'>
                                <Progress size={'small'} strokeWidth={2} width={25} percent={50} showInfo={false} strokeColor={'#ea003d'} />
                                <Progress size={'small'} strokeWidth={2} width={25} percent={30} showInfo={false} strokeColor={'#ea003d'} />
                                <Progress size={'small'} strokeWidth={2} width={25} percent={20} showInfo={false} strokeColor={'#ea003d'} />
                                <Progress size={'small'} strokeWidth={2} width={25} percent={5} showInfo={false} strokeColor={'#ea003d'} />
                            </div>
                        </div>
                        <div className='syuzet'>
                            <p>сюжет</p>
                            <Progress size={'small'} strokeWidth={4} percent={50} showInfo={false} strokeColor={'#ea003d'} />
                        </div>
                        <p className='card_hover_country'>2019, Россия, Приключения Приключения</p>
                        <p className='card_hover_duration'>85 минут</p>
                    </div>

                    <div className='hover_container_right'>

                    </div>
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