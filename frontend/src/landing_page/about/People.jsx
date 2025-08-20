import React from "react";

function People() {
  return (
    <div className="container p-lg-5">
      <div className="row text-center mb-5">
        <h3>People</h3>
      </div>

      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src="media/images/founder.jpg"
            alt="Founder"
            className="img-fluid rounded-circle"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
          <h5 className="fw-semibold">Shaik Raiyan</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-md-8">
          <p>
            Raiyan bootstrapped and founded <strong>EquiTrade</strong> in 2025
            to overcome the hurdles he faced during his journey as a trader.
            Today, the company has changed the landscape of the Indian broking
            industry.
          </p>
          <p>
            He is a member of various advisory committees and continues to work
            toward democratizing finance for everyone.
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on&nbsp;
            <a href="https://homepage.com" target="_blank" rel="noreferrer">
              Homepage
            </a>
            &nbsp;
            <a href="https://tradingqna.com" target="_blank" rel="noreferrer">
              TradingQnA
            </a>
            &nbsp;
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
