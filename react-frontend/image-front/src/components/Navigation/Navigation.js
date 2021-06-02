import React, { createFactory } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3">
            <Navbar.Brand href="/">What Image</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/list">Images History</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;