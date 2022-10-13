import React from 'react';
import './Banner.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import banner1 from '../../../images/home-banner-1.jpg';
import banner2 from '../../../images/home-banner-2.jpg';
import banner3 from '../../../images/home-banner-3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel fade className="banner-div">
                <Carousel.Item>
                    <img className="banner" src={banner1} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1 className="heading-text"><span>AR-Travels</span></h1>
                        <h2><span>100% trusted travel agency</span></h2>
                        <p>Make your dreams come true. Explore, Journey, Discover, Adventure. Making your heart want to return. Don'T Be A Tourist, Be A Traveler. No matter where you're going from, we take you there. Trust us, we’re professionals.</p>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="banner" src={banner2} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1 className="heading-text"><span>AR-Travels</span></h1>
                        <h2><span>10+ year of travel experience</span></h2>
                        <p>We are professional planners for your vacations. No matter where you’re going from, we take you there. Let our experts plan your trip. Make your next trip awesome. Spreading smiles across the globe.</p>
                    </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="banner" src={banner3} alt="First slide" />
                    <div className="img-opacity"></div>
                    <Row className="justify-content-md-center description">
                    <Col md={7}>
                        <h1 className="heading-text"><span>AR-Travels</span></h1>
                        <h2><span>90% of our traveller happy</span></h2>
                        <p>Let us transport you with our highly affordable and reliable holiday packages. Your imagination is your only limit with this new travel agency. Make your Hassle-Free travel plans now! Travel can open your mind</p>
                    </Col>
                </Row>
                </Carousel.Item>
                
            </Carousel>


        </>
    );
};

export default Banner;