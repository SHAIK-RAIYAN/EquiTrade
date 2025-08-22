import React from "react";
import {  slideInFromTop } from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container">
      <motion.div {...slideInFromTop} className="row text-center p-md-5">
        <h2 className="pt-5">Zerodha Products</h2>
        <h4 className="fw-light">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="p-3">
          Check out our <a href="#"> investment offerings → </a>
        </p>
      </motion.div>
      <hr className="text-muted" />
    </div>
  );
}

export default Hero;
