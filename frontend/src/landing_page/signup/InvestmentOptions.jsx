import { motion } from "framer-motion";
import React from "react";
import { appear } from "../../../public/animationHelperMotion";

function InvestmentOptions() {
  return (
    <div className="container text-center p-5">
      <motion.div {...appear} className="row my-5">
        <h3>Investment options with Zerodha demat account</h3>
      </motion.div>
      <div className="row g-5 col-12 col-md-10 mx-0 mx-md-auto">
        <motion.div
          initial={{ x: "50%", y: "60%", opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ amount: 0.04, once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="col-12 col-md-6">
          <div className="py-3 ">
            <div className="d-flex justify-content-between gap-3">
              <img src="/media/images/Stocks.svg" alt="stocks" />
              <div className="d-flex flex-column align-items-start text-start">
                <h4>Stocks</h4>
                <p className="text-muted text-wrap">
                  Invest in all exchange-listed securities
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "-50%", y: "60%", opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ amount: 0.04, once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="col-12 col-md-6">
          <div className="py-3 ">
            <div className="d-flex justify-content-between gap-3">
              <img src="/media/images/Mutualfunds.svg" alt="stocks" />
              <div className="d-flex flex-column align-items-start text-start">
                <h4>Mutual funds</h4>
                <p className="text-muted text-wrap">
                  Invest in commission-free direct mutual funds
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "50%", y: "-60%", opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ amount: 0.04, once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="col-12 col-md-6">
          <div className="py-3 ">
            <div className="d-flex justify-content-between gap-3">
              <img src="/media/images/IPO.svg" alt="stocks" />
              <div className="d-flex flex-column align-items-start text-start">
                <h4>IPO</h4>
                <p className="text-muted text-wrap">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "-50%", y: "-60%", opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ amount: 0.04, once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="col-12 col-md-6">
          <div className="py-3 ">
            <div className="d-flex justify-content-between gap-3">
              <img src="/media/images/futuresOptions.svg" alt="stocks" />
              <div className="d-flex flex-column align-items-start text-start">
                <h4>Futures & options</h4>
                <p className="text-muted text-wrap">
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <button className="my-4 fs-5 py-2 px-5">Explore Investments</button>
    </div>
  );
}

export default InvestmentOptions;
