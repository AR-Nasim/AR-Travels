import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://howling-zombie-15048.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            setIsLoading(false);
        });
    },[]);

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading reviews</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">Reviews of our <br />beloved travelers</h1>
            { <Row xs={1} md={3} lg={4} className="g-4">
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </Row> }
        </Container>
    );
};

export default Reviews;