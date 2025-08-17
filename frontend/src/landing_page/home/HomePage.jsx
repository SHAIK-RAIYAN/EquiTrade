import Footer from "../Footer";
import Navbar from "./../Navbar";
import OpenAccount from "./../OpenAccount";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Trust from "./Trust";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
