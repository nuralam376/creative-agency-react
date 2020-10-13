import React from "react";
import { Button, Image, Nav, Navbar, NavbarC } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-block p-3 sidebar">
            <Nav.Item className="mb-5">
              <Link to="/">
                <Image src={logo} style={{ height: "40px" }} />
              </Link>
            </Nav.Item>
            <Link to="/order" className="nav-link text-dark text-center">
              Order
            </Link>
            <Link to="/servicelist" className="nav-link text-dark text-center">
              Service List
            </Link>
            <Link to="/review" className="nav-link text-dark text-center">
              Review
            </Link>
            <Link to="/addservice" className="nav-link text-dark text-center">
              Add Service
            </Link>
            <Link to="/makeadmin" className="nav-link text-dark text-center">
              Make Admin
            </Link>
            <Link to="/logout" className="nav-link text-danger text-center">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
