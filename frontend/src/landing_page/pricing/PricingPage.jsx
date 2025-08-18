import ChargesExplanation from "./ChargesExplanation";
import ChargesTable from "./ChargesTable";
import EquityTable from "./EquityTable";
import Hero from "./Hero";

function PricingPage() {
  return (
    <>
      <Hero />
      <EquityTable />
      <ChargesTable />
      <ChargesExplanation />
    </>
  );
}

export default PricingPage;
