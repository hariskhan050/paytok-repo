import Rewards from "../components/Rewards";
import Companies from "../components/Companies";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Promote from "../components/Promote";
import PricingSection from "../components/PricingSection";
import Tutorial from "../components/Tutorial";
import { Element } from "react-scroll";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Element id="promote">
        <HeroSection />
      </Element>
      <Companies />
      <Element id="rewards">
        <Rewards />
        <Promote />
      </Element>
      <Element id="pricing">
        <PricingSection />
      </Element>
      <Element id="tutorial">
        <Tutorial />
      </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;
