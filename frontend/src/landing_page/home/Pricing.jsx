import React from "react";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div className="container pt-5">
      <motion.div
        initial={{ opacity: 0, y: "25%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.7 }}
        className="row d-flex align-items-center">
        <div className="col-sm-12 col-lg-6 px-lg-5">
          <h2 className="fs-3">Unbeatable pricing</h2>
          <p
            className="my-4  text-muted"
            style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="mt-5">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-lg-6 col-sm-12">
          <div className="row text-center text-lg-start">
            <div className=" col-6 mb-4 mb-md-0 d-flex align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="0Rs"
                style={{ width: "6rem" }}
              />
              <p
                className="text-muted mb-0"
                style={{ position: "relative", left: "-20px" }}>
                Free account opening
              </p>
            </div>

            <div className="col-6 d-flex align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="0Rs"
                style={{ width: "6rem" }}
              />
              <p
                className="text-muted mb-0"
                style={{ position: "relative", left: "-20px" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-6 mt-4 d-flex align-items-center">
              <img
                src="media/images/intradayTrades.svg"
                alt="20Rs"
                style={{ width: "6rem" }}
              />
              <p
                className="text-muted mb-0"
                style={{ position: "relative", left: "-20px" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Pricing;
