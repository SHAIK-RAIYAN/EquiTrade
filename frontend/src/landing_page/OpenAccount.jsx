import React from 'react';
import { appear } from '../../public/animationHelperMotion';
import { motion } from "framer-motion";

function OpenAccount() {
    return (
      <motion.div
      {...appear}
        className="container pt-5 mt-lg-5">
        <div className="row text-center">
          <h2>Open a EquiTrade account</h2>;
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <div className="col-sm-6 col-lg-3 m-auto">
            <button className="mt-4 fs-5 py-2 px-3 ">Sign up for free</button>
          </div>
        </div>
      </motion.div>
    );
}

export default OpenAccount;