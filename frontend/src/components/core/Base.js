import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Base = ({ children }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {children}
    <footer> Riafy co. Ltd</footer>
  </div>
);

export default Base;
