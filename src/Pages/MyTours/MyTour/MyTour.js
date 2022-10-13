import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const MyTour = (props) => {
    const { tour, handleDelete } = props;
    const [tourDetails, setTourDetails] = useState({});
    useEffect(()=>{
        fetch(`https://howling-zombie-15048.herokuapp.com/tours/${tour.orderId}`)
            .then(res => res.json())
            .then(data => setTourDetails(data));
    }, []);
    const { img, name, price } = tourDetails;
    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Text>
                        <span className="text-dark fw-bold">User Name: {tour.name}</span> <br />
                        <span className="text-dark fw-bold">Email: {tour.email}</span> <br />
                        <span className="text-dark fw-bold">Address: {tour.address}</span> <br />
                        <span className="text-dark fw-bold">Phone: {tour.phone}</span> <br />
                        <span className="text-dark fw-bold">Total paid: ${price}</span> <br />
                    </Card.Text>
                    <button onClick={()=> handleDelete(tour._id)} className="btn btn-danger">Delete</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyTour;