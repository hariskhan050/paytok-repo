import { useState, useEffect, useMemo } from "react";

import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  Button,
  Col,
} from "reactstrap";

import { Link as ScrollLink } from "react-scroll";

import logo from "../assets/logo.png";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(
    () => ["Promote", "Rewards", "Pricing", "Tutorial"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const navItemsLow = navItems.map((item) => item.toLowerCase());
      for (const sectionId of navItemsLow) {
        const element = document.getElementById(sectionId);
        if (element && isElementOnScreen(element)) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const isElementOnScreen = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight - 80) / 2 &&
      rect.bottom >= (window.innerHeight - 80) / 2
    );
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      className="py-2 sticky-top bg-white  shadow-sm px-2 px-md-4 px-lg-5"
      expand="md"

      light>
        
      <Col md={3} className="text-center">
        <img
          width={150}
          src={logo}
          alt=""
        />
      </Col>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse
        isOpen={isOpen}
        navbar>
        <Col md={9}>
          <Nav className="d-md-flex flex-column flex-md-row justify-content-center align-items-center">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <ScrollLink
                  key={item}
                  className={`nav-link text-primary-orange ${
                    activeSection === sectionId ? "fs-5 fw-bold" : ""
                  }`}
                  to={sectionId}
                  smooth={true}
                  onClick={() => isOpen && setIsOpen(false)}
                  style={{ cursor: "pointer" }}
                  offset={isOpen ? -280 : -80}>
                  {item}
                </ScrollLink>
              );
            })}
          </Nav>
        </Col>
        <Col
          md={3}
          className=" text-center text-md-start py-4 py-md-0">
          <Button className="btn-outlined">Login</Button>
          <Button className="mx-2 btn-filled ">Sign Up</Button>
        </Col>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
