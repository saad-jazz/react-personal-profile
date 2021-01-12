import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function FooterNavBar() {
    const scrollTo = (e) => {
        scroller.scrollTo(e.target.href.split('#')[1], {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }
    return(
        <div>
            <Navbar sticky="bottom" bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                <Navbar.Brand onClick={scrollTo} href="#home"><FontAwesomeIcon icon={faCopyright} /> 2021 Muhammad Saad Mir</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>    
            </Navbar>
        </div>
    );
}

export default FooterNavBar;