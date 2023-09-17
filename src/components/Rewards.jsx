import { Container, Row, Col, Button } from "reactstrap";

import about_section_img from "../assets/about_section_img.png";

const Rewards = () => {
  return (
    <div className="bg-gray-section">
      <Container className="py-2">
        <Row className="flex-md-row flex-column-reverse  justify-content-between align-items-center">
          <Col
            md={5}
            className="mt-4 mt-md-0">
            <img
              className="w-100"
              src={about_section_img}
              alt=""
            />
          </Col>
          <Col md={6}>
            <div className="w-100">
              <h1 className="text-center text-md-start fs-2 fw-bold">
                Are you a creative soul with a passion for
                <span className="text-primary-orange">TikTok</span>?
              </h1>
              <p
                className="my-4"
                style={{ textAlign: "justify" }}>
                At <span className="text-primary-orange fw-bold">PAYTOK</span> , you can earn money by making videos for our artists and brands. we believe that talent should be rewarded, no matter the size of your following. Join our community of influencers
                and start earning money by showcasing your unique style using
                specific sounds from musicians and posting about our brands if
                you have over 20k followers . Here&apos;s how you can turn your
                creativity into cash Click <a href="#">here</a> to register
              </p>
              <div className="my-2 text-center text-md-start">
                <Button className="px-4 py-2 btn-filled rounded text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rewards;
