import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-md-5 text-center mx-auto">
        <h3 className="py-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <hr className="text-muted" />
      <div className="row py-5 mt-5 mx-md-5">
        <div className="col-md-6 my-lg-3">
          <p className="mx-lg-5 text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            EquiTrade, a combination of "Equi" and "Trade", the word based on
            Equity Trading.
          </p>
          <p className="mx-lg-5 text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mx-lg-5 text-muted">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-md-6 my-lg-3">
          <p className="mx-lg-5 text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mx-lg-5 text-muted">
            <a href="https://rainmatter.com/"> Rainmatter</a>, our fintech fund
            and incubator, has invested in several fintech startups with the
            goal of growing the Indian capital markets.
          </p>
          <p className="mx-lg-5 text-muted">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
