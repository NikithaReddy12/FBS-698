import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Container } from 'react-bootstrap';
const Header = () => {
    return( 
        <div className='header'>
        <Container>
          <Nav.Link className="links" as={Link} to="/home">Home</Nav.Link>
          <Nav.Link className="links" as={Link} to="/">Search</Nav.Link>
          <Nav.Link className="links" as={Link} to="/bookingtickets">Book</Nav.Link>
          <Nav.Link className="links" as={Link} to="/login">CheckIn</Nav.Link>
        </Container>

    </div>
    )
}


export default Header;
