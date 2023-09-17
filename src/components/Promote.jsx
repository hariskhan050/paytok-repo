import HeroSection from "./HeroSection";

import promote_section_img from "../assets/promote_section_img.png";

const Promote = () => {
  const promoteSection = {
    heading: "Ready to take your brand to new heights?",
    content:
      "Embrace the world of influencer marketing with PAYTOK for Brands! Pay professional TikTokers with over 20k followers to either post your advert video on their page or make an advert video with a script written by you. Connect with a curated community of top TikTokers, each with their unique flair and expertise across various niches. From fashion to fitness, music to makeup, our influencers have the power to captivate audiences like never before.",
    img: promote_section_img,
    btnText: "Join Us!",
  };
  return (
    <>
      <HeroSection {...promoteSection}></HeroSection>
    </>
  );
};

export default Promote;
