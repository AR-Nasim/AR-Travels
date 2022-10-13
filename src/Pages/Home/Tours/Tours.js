import React, { useState, useEffect } from 'react';
import './Tours.css';
import { Container, Row, Spinner } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {

    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://howling-zombie-15048.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading your tours</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">Select your best package <br />for travel</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    tours.map(tour => <Tour tour={tour} key={tour._id}></Tour>)
                }
            </Row>
        </Container>
    );
};

export default Tours;