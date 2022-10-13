import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/model.png';

const About = () => {
    return (
        <Container>
            <Row className="text-start d-flex align-items-center mt-4">
                    <Col md={4} className="text-center info-img">
                        <img style={{ width: "40%" }} src={img} alt="" />
                    </Col>
                    <Col md={8}>
                        <div>
                            <h1 className="title text-start">About Us</h1>
                            <p>We provide international travel products and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure and Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations.</p>
                            <p>From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say and say what we do.</p>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default About;