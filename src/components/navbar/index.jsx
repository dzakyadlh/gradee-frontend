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
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" onClick={() => handleClick("/home")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => handleClick("/courses")}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => handleClick("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => handleClick("/login")}
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={() => handleClick("/register")}
            >
              Sign Up
            </Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="nav-droplink"
                onClick={() => handleClick("/profile")}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-droplink"
                onClick={() => handleClick("/settings")}
              >
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
