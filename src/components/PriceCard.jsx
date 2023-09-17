/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Row,
} from "reactstrap";

const PriceCard = ({ cardDetails }) => {
  return (
    <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
      {cardDetails.map((card) => {
        return (
          <Card
            key={card}
            className="my-2 shadow-sm rounded position-relative"
            style={{
              maxWidth: "18rem",
              minHeight: "18rem",
            }}>
            <CardHeader className="bg-primary-orange  text-white text-center  fs-4 fw-bold pt-4 pb-5">
              {card.heading} <span className="fs-6">{card.type}</span>
            </CardHeader>
            <CardBody>
              <CardTitle
                style={{ top: "75px", left: "12%" }}
                className="bg-white w-75 shadow-sm rounded position-absolute p-1 text-center text-primary-orange"
                tag="h5">
                <h3 className=" fs-2 ">{card.plan}</h3>
                <p>₦ {card.price} per video</p>
              </CardTitle>
              <CardText
                style={{
                  height: "11rem",
                  overflow: "hidden",
                  textAlign: "justify",
                }}
                className="mt-5">
                {card.description}
              </CardText>
              <Row className="px-2">
                <Button className="btn-filled ">Explore</Button>
              </Row>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default PriceCard;
