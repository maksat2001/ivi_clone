import React from 'react';
import { Link } from 'react-router-dom';
import { Alert24Regular, Search24Regular, Person24Regular } from '@fluentui/react-icons';
import logo from '../images/logo.svg';
import './Navbar.css';


function Navbar() {
    const data = [
        {
            key: 1,
            content: 'Мой Иви',
            className: 'navbar_item',
            to: '/'
        },
        {
            key: 2,
            content: 'Что нового',
            className: 'navbar_item',
            to: '/'
        },
        {
            key: 3,
            content: 'Фильмы',
            className: 'navbar_item',
            to: '/'
        },
        {
            key: 4,
            content: 'Сериалы',
            className: 'navbar_item',
            to: '/'
        },
        {
            key: 5,
            content: 'Мультфильмы',
            className: 'navbar_item',
            to: '/'
        },
        {
            key: 6,
            content: 'ТВ-каналы',
            className: 'navbar_item',
            to: '/'
        }
    ]
    return (
        <div className='navbar_container'>
            <div className='navbar_item_left'>
                <img src={logo} alt='ivi' />
                {data.map((item) =>
                    <Link className={item.className} to={item.to}>{item.content}</Link>
                )}
            </div>
            <div className='navbar_item_right'>
                <Link className='navbar_subscribe_button' to=''>Смотреть 30 дней бесплатно</Link>
                <Link className='navbar_search'>
                    <Search24Regular className='icon' />
                    <p>Поиск</p>
                </Link>
                <Link className='navbar_alert'><Alert24Regular fontWeight='800' /></Link>
                <Link className='navbar_profile'>
                    <Person24Regular />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;