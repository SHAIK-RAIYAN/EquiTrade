import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "../../../public/animationHelperMotion";

function Trust() {
  return (
    <div className="container pt-5">
      <div className="row text-center">
        <motion.div
          {...slideInFromLeft}
          className="col-lg-5 col-sm-12 text-start">
          <h2 className="fs-3">Trust with confidence</h2>
          <div className="my-5">
            <h3 className="fs-4">Customer-first always</h3>
            <p className="mt-2  text-muted">
              That's why 1.6+ crore customers trust EquiTrade with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="mt-2 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">The EquiTrade universe</h3>
            <p className="mt-2 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="my-5">
            <h3 className="fs-4">Do better with money</h3>
            <p className="mt-2 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...slideInFromRight}
          className="col-lg-7  col-md-6 col-12 mt-4 mt-lg-0">
          <img
            style={{ width: "90%" }}
            src="media/images/ecosystem.png"
            alt="Ecosystem"
          />
          <div className="d-flex justify-content-around m-3">
            <a href="#">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 0.5 }}
          className="my-5">
          <img
            src="media/images/pressLogos.png"
            alt="press"
            className="w-100"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Trust;
