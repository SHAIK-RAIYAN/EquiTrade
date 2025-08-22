import { motion } from "framer-motion";
import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
} from "../../../public/animationHelperMotion";

function RightImgSection({
  imageURL,
  Title,
  titleDescription,
  link1,
  link2,
  link1name,
  link2name,
}) {
  return (
    <div className="container">
      <div className="row py-5 justify-content-around mx-auto align-items-center">
        <motion.div
          {...slideInFromLeft}
          className="col-lg-4 col-md-5 px-lg-5 mx-md-3">
          <h2 className="py-3">{Title}</h2>
          <p>{titleDescription}</p>
          <div className="py-md-3">
            <p>
              <a href={link1}>
                {link1name}
              </a>
            </p>
          </div>
        </motion.div>
        <motion.div {...slideInFromRight} className="col-md-6 col-lg-5">
          <img className="img-fluid" src={imageURL} />
        </motion.div>
      </div>
    </div>
  );
}

export default RightImgSection;
