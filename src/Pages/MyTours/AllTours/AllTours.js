import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyTour from '../MyTour/MyTour';

const AllTours = () => {
    const { user } = useAuth();
    const [myTours, setMyTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://howling-zombie-15048.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {setIsLoading(false);setMyTours(data)});
    }, []);

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
                        const remainingTours = myTours.filter(tour => tour._id !== id);
                        setMyTours(remainingTours);
                    }
                })
        }
    }
    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading your tours</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">My Tours</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    myTours.map(tour => <MyTour tour={tour} handleDelete={handleDelete} key={tour._id}></MyTour>)
                }
            </Row>
        </Container>
    );
};

export default AllTours;