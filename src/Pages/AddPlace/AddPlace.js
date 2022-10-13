import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPlace = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.duration = "4Days/5Nights";
        fetch('https://howling-zombie-15048.herokuapp.com/tours', {
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

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={8}><h1 className="title">Add a new place</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="hook-form">
                        <input placeholder="Place Name" {...register("name")} />
                        <input placeholder="Add Description" defaultValue="" {...register("description")} />
                        <input placeholder="Price"  {...register("price", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Rating" defaultValue="" {...register("rating")} />
                        <input placeholder="Add Image URL" defaultValue="" {...register("img")} />

                        <input type="submit" className="btn-custom" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddPlace;