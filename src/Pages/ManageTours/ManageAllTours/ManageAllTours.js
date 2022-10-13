import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ManageTour from '../ManageTour/ManageTour';

const ManageAllTours = () => {

    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
            fetch('https://howling-zombie-15048.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {setIsLoading(false);setTours(data);});
    }, []);


    const handleUpdate = (currentTour) => {
        const url = `https://howling-zombie-15048.herokuapp.com/orders/${currentTour._id}`;
        currentTour.status = "Active";
        console.log(currentTour);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentTour)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const currentTours = tours.filter(tour => tour._id !== currentTour._id);
                    setTours([...currentTours, currentTour]);
                }
            })
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you wanna delete this order?");
        if (confirmation) {
            const url = `https://howling-zombie-15048.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingTours = tours.filter(tour => tour._id !== id);
                        setTours(remainingTours);
                    }
                })
        }
    }

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading all the tours</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">Manage All Tours</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    tours.map(tour => <ManageTour tour={tour} handleDelete={handleDelete} handleUpdate={handleUpdate} key={tour._id}></ManageTour>)
                }
            </Row>
        </Container>
    );
};

export default ManageAllTours;