import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import HowItWorks from "../components/sections/HowItWorks";
import Jobs from "../components/sections/JobCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
       <Jobs/>
      <CTA />
      <Footer />
    </>
  );
};

export default Home;