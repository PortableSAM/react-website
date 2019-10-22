import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #2c3e50;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ecf0f1;
    font-size: 1.2em;
    margin: 0 15px;
    padding: 0 15px;
    text-shadow: 0 3px 6px #bdc3c7;

    &:hover {
      color: #c8d6e5;
    }

    &:after {
      content: "";
      height: 2px;
      width: 0;
      background: #c8d6e5;
      display: block;
      transition: width 0.5s;
    }
    &:hover::after {
      transform: width;
      width: 100%;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/">React Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
