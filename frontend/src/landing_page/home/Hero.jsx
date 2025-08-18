import React from "react";
import { motion } from "framer-motion";
import {
  appear,
  slideInFromBottom,
} from "../../../public/animationHelperMotion";

function Hero() {
  return (
    <div className="container p-3 p-5 ">
      <div className="row text-center">
        <motion.img
          {...slideInFromBottom}
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="m-auto mb-5 col-12 col-lg-10 "
        />
        <motion.div {...appear}>
          <h1 className="fs-2">Invest in everything</h1>
          <p className="m-2 fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <div className="col-sm-6 col-lg-3 m-auto">
            <button className="mt-4 fs-5 py-2 px-3 ">Sign up for free</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
