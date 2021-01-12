import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function NavBar() {
    return(
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="/">
            Muhammad Saad Mir
            </Navbar.Brand>
            <Navbar.Brand href="https://www.facebook.com/M.SaAd.Miir/">
                <FontAwesomeIcon icon={faFacebookSquare} />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/muhammad-saad-mir/">
                <FontAwesomeIcon icon={faLinkedin} />
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#about-me'>About Me</Nav.Link>
                <Nav.Link href='#my-projects'>Projects</Nav.Link>
                <Nav.Link href='#contact-me'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>    
            </Navbar>
        </div>
    );
}

export default NavBar;