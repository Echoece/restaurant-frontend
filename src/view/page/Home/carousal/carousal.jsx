import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './carousal.css'
import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'
import { width } from '@mui/system';

const CarousalSlider = () => {
    const items = [
        {
            src: a
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src: b
        },
        {
            src: c
        }
    ]

    return (
            <Carousel fade interval={1500}>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={a}
                        alt="First slide"   
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c}
                        alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
    )
};



export default CarousalSlider;
