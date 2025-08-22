import React from "react";
import { appear, slideInFromTop } from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function Universe() {
  const parent = {
    rotated: {},
    normal: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
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
    <div className="container my-5">
      <motion.h4 {...appear} className="text-center fw-light">
        Want to know more about our technology stack? Check out the
        <a href="#" className="ms-1">
          EquiTrade.tech
        </a>
        &nbsp; blog.
      </motion.h4>

      <div className="row text-center mt-4">
        <motion.div {...slideInFromTop}>
          <h3 className="my-4">The EquiTrade Universe</h3>
          <p className="p-2">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </motion.div>

        <motion.div
          variants={parent}
          initial="rotated"
          whileInView="normal"
          viewport={{ amount: 0.1, once: true }}
          className="mt-3 row">
          <motion.div variants={rotateX} className="col-md-4 mb-5 p-2">
            <a href="#" className="text-dark">
              <img
                src="media/images/sensibullLogo.svg"
                alt="Sensibull"
                className="mb-3 h-25"
                style={{ maxHeight: "50px" }}
              />
              <h5 className="fw-bold">Sensibull</h5>
              <p className="small text-muted">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points and more.
              </p>
            </a>
          </motion.div>

          <motion.div variants={rotateX} className="col-md-4 mb-5 p-2">
            <a href="#" className="text-dark">
              <img
                src="media/images/tijori.svg"
                alt="Tijori"
                className="mb-3"
                style={{ maxHeight: "50px" }}
              />
              <h5 className="fw-bold">Tijori</h5>
              <p className="small text-muted">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </a>
          </motion.div>

          <motion.div variants={rotateX} className="col-md-4 mb-5 p-2">
            <a href="#" className="text-dark">
              <img
                src="media/images/streak-logo.png"
                alt="Streak"
                className="mb-3"
                style={{ maxHeight: "50px" }}
              />
              <h5 className="fw-bold">Streak</h5>
              <p className="small text-muted">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </motion.div>

          <motion.div variants={rotateX} className="col-md-4 mb-5 p-2">
            <a href="#" className="text-dark">
              <img
                src="media/images/smallcase-logo.png"
                alt="Smallcase"
                className="mb-3"
                style={{ maxHeight: "50px" }}
              />
              <h5 className="fw-bold">Smallcase</h5>
              <p className="small text-muted">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </motion.div>

          <motion.div variants={rotateX} className="col-md-4 mb-5 p-2">
            <a href="#" className="text-dark">
              <img
                src="media/images/dittoLogo.png"
                alt="Ditto"
                className="mb-3"
                style={{ maxHeight: "50px" }}
              />
              <h5 className="fw-bold">Ditto</h5>
              <p className="small text-muted">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center mt-3">
        <button className="px-4 py-2 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
