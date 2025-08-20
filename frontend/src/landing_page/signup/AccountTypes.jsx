import React from "react";
import { appear } from "./../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function AccountTypes() {
  const parent = {
    rotated: {},
    normal: {
      transition: {
        staggerChildren: 0.4, // animation duration (how long animation should happen)
        delayChildren: 0.3, // delay before next child starts animation
      },
    },
  };
  const rotateX = {
    rotated: { rotateX: 90, opacity: 0 },
    normal: {
      rotateX: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <div className="container text-center py-5">
      <motion.div {...appear} className="row mb-4">
        <h3>Explore different account types</h3>
      </motion.div>

      <motion.div // to use staggering(animating child ele one after other) we apply motion for parent element with staggering values
        variants={parent}
        initial="rotated"
        whileInView="normal"
        viewport={{ amount: 0.1, once: true }}
        className="row g-4 col-12 col-lg-10 mx-auto">
        <motion.div variants={rotateX} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-start shadow-sm border-0 p-3">
            <div className="d-flex align-items-start gap-3">
              <i
                className="fa-regular fa-user"
                style={{ color: "#74C0FC" }}></i>
              <div>
                <h5 className="fw-semibold">Individual Account</h5>
                <p className="text-muted">
                  Invest in equity, mutual funds and derivatives
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rotateX} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-start shadow-sm border-0 p-3">
            <div className="d-flex align-items-start gap-3">
              <i
                className="fa-solid fa-user-group"
                style={{ color: "#74C0FC" }}></i>
              <div>
                <h5 className="fw-semibold">HUF Account</h5>
                <p className="text-muted">
                  Make tax-efficient investments for your family
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rotateX} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-start shadow-sm border-0 p-3">
            <div className="d-flex align-items-start gap-3">
              <i className="fa-solid fa-globe" style={{ color: "#74C0FC" }}></i>
              <div>
                <h5 className="fw-semibold">NRI Account</h5>
                <p className="text-muted">
                  Invest in equity, mutual funds, debentures, and more
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rotateX} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-start shadow-sm border-0 p-3">
            <div className="d-flex align-items-start gap-3">
              <i className="fa-solid fa-child" style={{ color: "#74C0FC" }}></i>
              <div>
                <h5 className="fw-semibold">Minor Account</h5>
                <p className="text-muted">
                  Teach your little ones about money & invest for their future
                  with them
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rotateX} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 text-start shadow-sm border-0 p-3">
            <div className="d-flex align-items-start gap-3">
              <i className="fa-solid fa-city" style={{ color: "#74C0FC" }}></i>
              <div>
                <h5 className="fw-semibold">Corporate / LLP / Partnership</h5>
                <p className="text-muted">
                  Manage your business surplus and investments easily
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AccountTypes;
