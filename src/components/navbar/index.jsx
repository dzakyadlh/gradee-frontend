import React from "react";
import { useNavigate } from "react-router";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./navbar.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand className="nav-brand" href="/">
          Gradee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about">
              Store
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className="nav-link" href="/register">
              Sign Up
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-droplink">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-droplink">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-logout" onClick={logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
