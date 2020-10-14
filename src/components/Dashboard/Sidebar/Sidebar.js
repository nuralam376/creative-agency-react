import React from "react";
import { Button, Image, Nav, Navbar, NavbarC } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <Nav className="d-block sidebar">
        <Nav.Item className="mb-5">
          <Link to="/" className="nav-link text-dark">
            <Image src={logo} className="w-25" />
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/servicelist" className="nav-link text-dark">
            Service List
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/addservice" className="nav-link text-dark">
            Add Service
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/makeadmin" className="nav-link text-dark">
            Make Admin
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/order" className="nav-link text-dark">
            Order
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/review" className="nav-link text-dark">
            Review
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
