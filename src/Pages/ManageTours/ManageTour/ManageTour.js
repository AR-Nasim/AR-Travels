import React,{ useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageTour = (props) => {
    const { tour, handleDelete, handleUpdate } = props;
    const [tourDetails, setTourDetails] = useState({});
    useEffect(()=>{
        fetch(`https://howling-zombie-15048.herokuapp.com/tours/${tour.orderId}`)
            .then(res => res.json())
            .then(data => setTourDetails(data));
    }, [tour.orderId]);
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
                        <span className={ tour.status === "Pending" ? "fw-bold text-danger" : "fw-bold text-success"}>Status: {tour.status}</span> <br />
                    </Card.Text>
                    <div>
                        {
                            tour.status === "Pending" && <button onClick={()=> handleUpdate(tour)} className="btn btn-success me-3">Active</button>
                        }
                        <button onClick={()=> handleDelete(tour._id)} className="btn btn-danger">Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageTour;