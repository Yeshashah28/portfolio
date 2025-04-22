import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';

import '../navigationBar/navBar.css';  // Import custom CSS

function NavBar({onContactClick }) {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/projects", { state: { fromNav: true } });
  };
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-text">Y.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto to align the Nav items to the right */}
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link href="/resume" className="nav-item">Resume</Nav.Link>
            <Nav.Link onClick={handleProjectsClick} className="nav-item">Projects</Nav.Link>
            <Nav.Link onClick={onContactClick} className="nav-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
