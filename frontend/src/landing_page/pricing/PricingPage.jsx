import Footer from "../Footer";
import Navbar from "../Navbar";
import ChargesExplanation from "./ChargesExplanation";
import ChargesTable from "./ChargesTable";
import EquityTable from "./EquityTable";
import Hero from "./Hero";

function PricingPage() {
  return (
    <>
      <Navbar/>
      <Hero />
      <EquityTable />
      <ChargesTable />
      <ChargesExplanation />
      <Footer/>
    </>
  );
}

export default PricingPage;
