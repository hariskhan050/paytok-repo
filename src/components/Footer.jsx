import { Container, Row, Col } from "reactstrap";

import { Link as ScrollLink } from "react-scroll";

import logo from "../assets/logo.png";

const Footer = () => {
  const navItems = ["Pricing", "Rewards", "Promote", "Tutorial"];
  return (
    <footer className="bg-primary-orange text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col
            md={4}
            className="text-center ">
            <img
              width={150}
              style={{ filter: "grayscale(100%) brightness(200%)" }}
              src={logo}
              alt="Logo"
            />
          </Col>
          <Col
            md={4}
            className="my-5 my-md-0">
            <h5 className="text-center">Quick Links</h5>
            <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 justify-content-center align-items-center">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <ScrollLink
                    key={item}
                    className="nav-link  text-start text-decoration-underline p-0 text-white"
                    to={sectionId}
                    smooth={true}
                    style={{ cursor: "pointer" }}
                    offset={-80}>
                    {item}
                  </ScrollLink>
                );
              })}
            </div>
          </Col>
          <Col
            className="text-center"
            md={4}>
            <h5>Contact Us</h5>
            <p>Email: example@paytok.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
