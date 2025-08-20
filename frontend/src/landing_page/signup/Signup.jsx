import React from "react";
import {
  appear,
  slideLeftFromMiddle,
  slideRightFromMiddle,
} from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";
function Signup() {
  return (
    <div className="container mt-md-5 mt-3">
      <div className="row text-center">
        <motion.div {...appear} className="col-12 py-5">
          <h2 className="mb-4">Open a free demat and trading account online</h2>
          <p className="fs-4 text-muted">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </motion.div>
      </div>

      <div className="row align-items-center col-10 mx-auto">
        <motion.div
          {...slideLeftFromMiddle}
          initial={{ ...slideLeftFromMiddle.initial, opacity: 1 }}
          style={{ zIndex: 1 }}
          className="col-md-7 col-12 text-center">
          <img className="img-fluid" src="/media/images/signup.svg" alt="" />
        </motion.div>
        <motion.div {...slideRightFromMiddle} className="col-md-5 col-12">
          <h2 className="my-2">Signup now</h2>
          <p className="text-muted">Or track your existing application</p>
          <form
            action="#"
            className="d-flex flex-column align-items-start my-3">
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input
                type="tel"
                className="form-control form-control-lg shadow-none"
                placeholder="Enter your mobile number"
                maxLength="10"
              />
            </div>
            <button className="my-4 fs-5 py-2 px-5">Get OTP</button>
          </form>
          <p className="fs-6 text-muted">
            By proceeding, you agree to the EquiTrade terms & privacy policy
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
