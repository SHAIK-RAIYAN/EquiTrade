import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
} from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="container pt-5 pb-lg-5">
      <div className="row">
        <motion.div {...slideInFromLeft} className="col-md-6 col-12 mb-4">
          <img
            src="media/images/education.svg"
            alt="varsity"
            style={{width:"80%"}}
          />
        </motion.div>
        <motion.div {...slideInFromRight} className="col-md-6 col-12 d-flex flex-column justify-content-center">
          <h2 className="fs-3">Free and open market education</h2>
          <p className="mt-4 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <br />
          <p className="mt-4  text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TradingQ&A<i className="fa-solid fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
