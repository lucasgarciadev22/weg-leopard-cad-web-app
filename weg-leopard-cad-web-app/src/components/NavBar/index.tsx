import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import brandname from "../../images/leopard_text.png";

const NavBar: React.FC = () => {
  return (
    <BootstrapNavbar data-bs-theme="dark" expand="lg">
      <BootstrapNavbar.Brand href="/">
        <img src={brandname} height={24} alt="WEG Leopard CAD Logo" />
      </BootstrapNavbar.Brand>
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
          <Nav.Link
            href="https://forms.office.com/pages/responsepage.aspx?id=pmZmiNKoBEagApW2Ist-GM-3mVoPd1tFuw2ZboLYedJUOEJFRko1TUJFRURNRjhGUTI3UEVSTDEyVS4u"
            target="_blank"
          >
            Send Feedback
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default NavBar;
