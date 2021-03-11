import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">USA All Star League</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/">League</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;