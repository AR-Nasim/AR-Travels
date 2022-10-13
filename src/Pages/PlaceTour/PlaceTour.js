import React, { useEffect, useState } from 'react';
import './PlaceTour.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Card, Col, Container, Row } from 'react-bootstrap';

const PlaceTour = () => {

    const { tourId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.orderId = tourId;
        data.status = "Pending";
        fetch('https://howling-zombie-15048.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }

    const [tours, setTours] = useState([]);
    const [currentTour, setCurrentTour] = useState([]);
    useEffect(() => {
        if (!tours.length) {
            fetch('https://howling-zombie-15048.herokuapp.com/tours')
                .then(res => res.json())
                .then(data => setTours(data));
        }
        if (tours.length) {
            const tour = tours.find(tr => tr._id === tourId);
            console.log("hello", tour);
            setCurrentTour(tour);
        }

    }, [tours]);

    const { img, name, price, duration, description } = currentTour;

    return (
        <Container>
            <h1 className="title">Place Order</h1>
            <Row>
                <Col md={6}>
                <Card className="h-100">
                    <div className="card">
                        <Card.Img className="card-img" variant="top" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title><h4><span>{name}</span></h4></Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className="d-flex justify-content-evenly">
                            <h5>Price: <span>${price}</span></h5>
                            <h5><i className="far fa-calendar-alt"></i> {duration}</h5>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="hook-form">

                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                        <input type="submit" value="Place Order" className="btn-custom" />
                    </form>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceTour;