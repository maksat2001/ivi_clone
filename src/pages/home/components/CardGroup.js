import React from 'react';
import Card from '../../../components/Card';
import './CardGroup.css';

function CardGroup() {
    return (
        <div className='card_group_container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardGroup;