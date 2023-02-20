import React from 'react';
import { ChevronRightRegular } from '@fluentui/react-icons';
import Card from '../../../components/Card';
import './CardGroup.css';

function CardGroup() {
    return (
        <div className='card_group_container'>
            <div className='card_group_name'>
                <p>Рекомендую посмотреть</p>
                <ChevronRightRegular style={{ fontSize: '28px', fontWeight: '800' }} />
            </div>
            <div className='card_group_card_container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <Card /> */}
        </div>
    );
}

export default CardGroup;