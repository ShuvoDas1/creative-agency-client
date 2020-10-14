import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselItem.css'
const CarouselItem = () => {
    return (

        <section className='m-5'>
            <h3 className='text-center'>Here are some of <span className='text-success'>our works</span></h3>
            <Carousel className="container bg-dark p-3">
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel5}
                        alt="Five slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>

    );
};

export default CarouselItem;