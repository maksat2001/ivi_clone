import React from 'react';
import { Carousel } from '3d-react-carousal';
import slide1 from '../images/slide1.jfif';
import slide2 from '../images/slide2.jfif';
import './Carusel.css';

function Carusel() {
    let slides = [
        <img className='navbar_slide' src={slide1} alt='slide1' />,
        <img className='navbar_slide' src={slide2} alt='slide2' />,
        <img className='navbar_slide' src={slide1} alt='slide1' />,
        <img className='navbar_slide' src={slide2} alt='slide2' />,
    ];
    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <Carousel slides={slides} autoplay={true} interval={4000} onSlideChange={callback} width={'100%'} />
    );
}

export default Carusel;