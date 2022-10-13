import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <About></About>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;