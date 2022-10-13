import React from 'react';
import './Tour.css';
import { Card, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Tour = (props) => {
    const { img, name, description, price, duration, rating } = props.tour;
    return (
        <Col>
            <Card className="h-100">
                <div className="card">
                <Card.Img className="card-img" variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title><h4><span>{name}</span></h4></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p><Rating
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    /> ({rating})</p>
                    <div className="d-flex justify-content-evenly">
                    <h5>Price: <span>${price}</span></h5>
                    <h5><i className="far fa-calendar-alt"></i> {duration}</h5>
                </div>
                </Card.Body>
                <Card.Footer className="card-footer pt-0">
                    <Link to={`/placeTourOrder/${props.tour._id}`}><Button className="btn-custom" variant="primary">Book Now <i className="fas fa-check-square"></i></Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Tour;