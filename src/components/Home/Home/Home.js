import React from 'react';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;