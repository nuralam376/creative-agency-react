import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logos/logo.png";

const NavbarMenu = () => {
  return (
    <div className="container">
      <Navbar variant="light" expand="lg">
        <Navbar.Brand href="/">
          <Image src={logo} className="w-25 img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Our Portfolio</Nav.Link>
            <Nav.Link href="/">Contact Us</Nav.Link>
            <Nav.Link href="/">Our Team</Nav.Link>
          </Nav>
          <Nav.Link href="/">
            <Button variant="dark">Login</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
