import React from "react";
import { appear, slideInFromLeft, slideInFromRight } from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function StepsOpenAccount() {
  return (
    <div
      className="container-fluid mt-md-5 mt-3 py-5"
      style={{ backgroundColor: "#fafafb" }}>
      <motion.div {...appear} className="row text-center">
        <h2 className="mb-5">Steps to open a demat account with Zerodha</h2>
      </motion.div>

      <div className="row align-items-center col- 10 mx-auto">
        <motion.div {...slideInFromLeft} className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="/media/images/steps.svg"
            alt="steps"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </motion.div>

        <motion.div {...slideInFromRight} className="col-md-6 col-12 text-start">
          <div className="mb-4 d-flex align-items-center">
            <span className="me-3 border rounded-circle px-3 py-2">01</span>
            <p className="mb-0 fw-medium">Enter the requested details</p>
          </div>
          <hr />
          <div className="mb-4 d-flex align-items-center">
            <span className="me-3 border rounded-circle px-3 py-2">02</span>
            <p className="mb-0 fw-medium">Complete e-sign &amp; verification</p>
          </div>
          <hr />
          <div className="mb-4 d-flex align-items-center">
            <span className="me-3 border rounded-circle px-3 py-2">03</span>
            <p className="mb-0 fw-medium">Start investing!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StepsOpenAccount;
