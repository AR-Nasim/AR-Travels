import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    const { user, logOut } = useAuth();
    let firstName = "";
    if(user.displayName){
        const fullName = user.displayName.split(' ');
        firstName = fullName[0];
    }
    return (
        <div className="navbar">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand to="/home"><h1><span>AR-Travels</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" variant="light">
                        <Nav className="ms-auto">
                            <Nav.Link><NavLink className="link" to="/home">Home</NavLink></Nav.Link>
                            {
                                user.email && <>
                                <Nav.Link><NavLink className="link" to="/myTour">My Tours</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="link" to="/manageTours">Manage Tours</NavLink></Nav.Link>
                                <Nav.Link><NavLink className="link" to="/addTour">Add New Places</NavLink></Nav.Link>
                                <Navbar.Text style={{ color: "#000" }}>
                                <span style={{ fontSize: "22px", color: "#3ABDC1" }}><i className="fas fa-user"></i> {firstName}</span>
                                </Navbar.Text> </>
                            }
                            {
                                user.email && <Link onClick={logOut} to="/" ><Button className="btn-custom ms-2" variant="primary">Logout</Button></Link>
                            }
                            {
                                !user.email && <Link onClick={logOut} to="/login" ><Button className="btn-custom ms-2" variant="primary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;