import React from "react";
import { Navbar as Bar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import gcclogo from '../../static/images/logo/gcclogo.png';

const Navbar = () => (
    <Bar bg="light" expand="lg">
        <Bar.Brand href="#home">React-Bootstrap</Bar.Brand>
        <Bar.Toggle aria-controls="basic-navbar-nav" />
        <Bar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Bar.Collapse>
        <img 
                        src={gcclogo} 
                        alt={gcclogo} 
                        className='home__img'
                    />
    </Bar>
);

export default Navbar;
