//SECTION - Companies names and logos
import { Container } from "reactstrap";

import mailchimp_img from "../assets/mailchimp_img.png";
import aweber_img from "../assets/aweber_img.webp";
import convertkit_img from "../assets/convertkit_img.png";
import wordpress_img from "../assets/wordpress_img.jpg";
import samcart_img from "../assets/samcart_img.png";

const Companies = () => {
  const companies = [
    mailchimp_img,
    aweber_img,
    convertkit_img,
    wordpress_img,
    samcart_img,
  ];
  return (
    <Container >
      <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-between gap-3 align-items-center my-8">
        {companies.map((company) => {
          return (
            <img
              key={company}
              width={120}
              src={company}
              alt={company}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Companies;
