import Hero from "./Hero";
import LeftImgSection from "./LeftImgSection";
import RightImgSection from "./RightImgSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImgSection
        imageURL="media/images/kite.png"
        Title="Kite"
        titleDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="#"
        link2="#"
        link1name="Try Demo →"
        link2name="Learn more →"
      />
      <RightImgSection
        imageURL="media/images/console.png"
        Title="Console"
        titleDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="#"
        link1name="Learn more →"
      />
      <LeftImgSection
        imageURL="media/images/coin.png"
        Title="Coin"
        titleDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="#"
        link1name="Coin →"
      />
      <RightImgSection
        imageURL="media/images/kiteconnect.svg"
        Title="Kite Connect API"
        titleDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="#"
        link1name="Kite Connect →"
      />
      <LeftImgSection
        imageURL="media/images/varsity.png"
        Title="Varsity mobile"
        titleDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />

      <Universe />
    </>
  );
}

export default ProductPage;
