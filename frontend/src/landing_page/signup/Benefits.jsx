import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "../../../public/animationHelperMotion";

function Benefits() {
  return (
    <div className="container pt-5">
      <div className="row text-center align-items-center">
        <motion.div
          {...slideInFromLeft}
          className="col-lg-5 col-sm-12 text-start">
          <div className="my-5">
            <h3 className="fs-4">Unbeatable pricing</h3>
            <p className="mt-3 text-muted">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">Best investing experience</h3>
            <p className="mt-3 text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="mt-3 text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">The Zerodha universe</h3>
            <p className="mt-3 text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...slideInFromRight}
          className="col-lg-6  col-md-6 col-12 mt-4 mt-lg-0">
          <img
            className="w-50"
            src="media/images/benefits.svg"
            alt="Ecosystem"
          />
          <div className="d-flex justify-content-around my-5">
            <h3>Benefits of opening a Zerodha demat account</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Benefits;
