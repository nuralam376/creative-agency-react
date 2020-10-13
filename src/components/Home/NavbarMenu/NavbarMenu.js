import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logos/logo.png";

const NavbarMenu = () => {
  return (
    <div className="container">
      <Navbar variant="light">
        <Navbar.Brand href="#home">
          <Image src={logo} className="w-25 img-fluid" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Our Portfolio</Nav.Link>
          <Nav.Link href="/">Contact Us</Nav.Link>
          <Nav.Link href="/">Our Team</Nav.Link>
        </Nav>
        <Nav.Link href="/">
          <Button variant="dark">Login</Button>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
