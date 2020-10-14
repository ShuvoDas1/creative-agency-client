import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <CarouselItem></CarouselItem>
        </div>
    );
};

export default Home;