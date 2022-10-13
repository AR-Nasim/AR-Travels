import React from 'react';
import './Review.css';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { img, name, review } = props.review;

    return (
        <Col>
            <Card className="review-card h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Text>
                        <small className="review">{review}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;