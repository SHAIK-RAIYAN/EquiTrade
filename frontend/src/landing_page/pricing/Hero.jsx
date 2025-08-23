import { motion } from "framer-motion";
import React from "react";
import { appear, slideInFromLeft, slideInFromRight, slideInFromTop } from "../../../public/animationHelperMotion";

function Hero() {
  return (
    <div className="container">
      <motion.div {...slideInFromTop} className="row m-3 p-3 m-lg-5 p-lg-5  text-center">
        <h2>Charges</h2>
        <p className="text-muted">List of all charges and taxes</p>
      </motion.div>

      <div className="row">
        <motion.div {...slideInFromLeft} className="col-lg-3 col-md-6 col-12 mx-lg-auto my-3 p-md-3 text-center">
          <img className="p-4 col-8 col-md-10 col-lg-12" src="media/images/pricing0.svg" alt="price" />
          <h3 className="py-3">Free equity delivery</h3>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </motion.div>
        <motion.div {...appear} className="col-lg-3 col-md-6 col-12 mx-lg-auto my-3 p-md-3 text-center">
          <img className="p-4 col-8 col-md-10 col-lg-12" src="media/images/intradayTrades.svg" alt="price" />
          <h3 className="py-3">Intraday and F&O trades</h3>
          <p className="text-muted fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </motion.div>
        <motion.div {...slideInFromRight} className="col-lg-3 col-md-6 col-12 mx-lg-auto my-3 p-md-3 text-center">
          <img className="p-4 col-8 col-md-10 col-lg-12" src="media/images/pricing0.svg" alt="price" />
          <h3 className="py-3">Free direct MF</h3>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
