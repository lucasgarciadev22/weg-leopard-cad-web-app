// src/components/Navbar.tsx
import React from 'react';
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar: React.FC = () => {
  return (
    <BootstrapNavbar data-bs-theme="dark" expand="lg">
      <BootstrapNavbar.Brand href="/">WEG Leopard CAD</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/release-notes">
            <Nav.Link>Release Notes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/quick-guide">
            <Nav.Link>Quick Guide</Nav.Link>
          </LinkContainer>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default NavBar;
