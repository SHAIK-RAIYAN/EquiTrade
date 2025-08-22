import React from "react";
import { slideInFromLeft, slideInFromRight } from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function LeftImgSection({
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
        <motion.div {...slideInFromLeft} className="col-md-6 col-lg-5">
          <img className="img-fluid" src={imageURL} />
        </motion.div>
        <motion.div
          {...slideInFromRight}
          className="col-lg-4 col-md-5 px-lg-5 mx-md-3 ">
          <h2 className="py-3">{Title}</h2>
          <p>{titleDescription}</p>
          <div className="py-md-3">
            {link1 && <p>
              <a className="me-5" href={link1}>
                {link1name}
              </a>
              <a href={link2}>{link2name}</a>
            </p>
            }
          </div>
          <div>
            <a className="me-5" href="https://play.google.com/">
              <img src="media/images/googlePlayBadge.svg" alt="Google play" />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src="media/images/appstoreBadge.svg" alt="App store" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LeftImgSection;
