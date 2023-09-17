import { Container, Row, Col, Button } from "reactstrap";

import hero_section from "../assets/hero_section.png";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ heading, content, img, btnText }) => {
  //These comes from promote section
  return (
    <Container className="py-3">
      <Row className="flex-md-row align-items-center">
        <Col md={6}>
          <div className="w-100">
            {heading ? (
              <h1 className="text-center text-md-start fs-1 fw-bold">
                {heading}
              </h1>
            ) : (
              <h1 className="text-center text-md-start fs-1 fw-bold">
                Are you a <span className="text-primary-orange">musician</span>{" "}
                looking to promote your music on
                <span className="text-primary-orange">TikTok</span>?
              </h1>
            )}

            {content ? (
              <p
                style={{ textAlign: "justify" }}
                className="my-4">
                {content}
              </p>
            ) : (
              <p
                style={{ textAlign: "justify" }}
                className=" my-4">
                At <span className="text-primary-orange fw-bold">PAYTOK</span> ,
                you can pay our influencers to make videos using your song. we
                offer a flexible and transparent pricing system that allows you
                to choose the best option for your budget and goals. Click{" "}
                <a href="#">here</a> to register
              </p>
            )}

            <div className="my-2 text-center text-md-start">
              <Button className="px-4 py-2 btn-filled rounded ">
                {btnText || "Join Our Community!"}
              </Button>
            </div>
          </div>
        </Col>

        <Col
          md={6}
          className="mt-4 mt-md-0">
          <img
            className="w-100"
            src={img ? img : hero_section}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
