import { Container } from "reactstrap";

import PriceCard from "./PriceCard";

const PricingSection = () => {
  const earningCardDetails = [
    {
      heading: "Music",
      plan: "EARN",
      price: "300",
      description:
        "Enjoy earning ₦300 for every video you post on TikTok featuring music from our artists. Turn your TikTok prowess into a stage for financial gain. You can earn over N100k monthly.",
    },
    {
      heading: "Brands",
      type: "(Post Advert Video)",
      plan: "EARN",
      price: "450",
      description:
        "If you have over 20k followers, you can earn ₦450 per video just by posting brand advert videos on your page. You can earn over N150k  monthly.",
    },
    {
      heading: "Brands ",
      type: "(Make Advert Video)",
      plan: "EARN",
      price: "700",
      description:
        "Use your voice to earn ₦700 per video. If you have over 20k followers, you can make videos reading advert scripts made by brands. Make your creativity a revenue stream. You can earn over N200k  monthly.",
    },
  ];
  const paymentCardDetails = [
    {
      heading: "Music",
      plan: "PAY",
      price: "500",
      description:
        "With just  ₦500 per video, with a minimum of 25 videos (₦12,500) you can get professional TikTokers to use your songs in their video.",
    },
    {
      heading: "Brands",
      type: "(Post Advert Video)",
      plan: "PAY",
      price: "700",
      description:
        "With just  ₦700 per video, with a minimum of 25 videos (₦17,500) you can get professional TikTokers with over 20k followers to post your advert videos on their page.",
    },
    {
      heading: "Brands",
      type:"(Make Advert Video)",
      plan: "PAY",
      price: "1000",
      description:
        "With just  ₦1000 per video, with a minimum of 25 videos (₦25,000) you can get professional TikTokers with over 20k followers to make advert videos reading advert scripts made by you.",
    },
  ];
  return (
    <div className="bg-gray-section">
      <Container className="py-5 ">
        <h4 className="fs-1 fw-bold mb-5 text-primary-orange text-center ">
          Pricing
        </h4>
        <h3 className="fs-3 fw-bold mb-3 text-primary-orange text-center ">
          Influencer Earnings
        </h3>
        <PriceCard cardDetails={earningCardDetails} />
        <h3 className="fs-3 mt-5 mb-3 fw-bold text-primary-orange text-center ">
          Payment Price
        </h3>
        <PriceCard cardDetails={paymentCardDetails} />
      </Container>
    </div>
  );
};

export default PricingSection;
