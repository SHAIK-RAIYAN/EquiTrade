import React from "react";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../../public/animationHelperMotion";

function SupportSearch() {
  return (
    <div className="container-fluid bg-light">
      <div className="row col-md-9 mx-auto py-3">
        <motion.div {...slideInFromTop} className="d-flex justify-content-between align-items-center px-5 px-md-0 py-4">
          <h2 className="ms-2 ms-md-0 fs-1 text-dark">Support Portal</h2>
          <button className="btn btn-primary me-2 me-md-0 px-4 fs-6 rounded">
            My tickets
          </button>
        </motion.div>

        <div className="pb-4 d-flex justify-content-center">
          <motion.div {...slideInFromRight} className="input-group">
            <span className="input-group-text bg-white">
              <i className="fa fa-search text-muted"></i>
            </span>
            <input
              className="form-control p-2 p-md-3 shadow-none"
              type="text"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SupportSearch;
