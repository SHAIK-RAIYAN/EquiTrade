import { motion } from "framer-motion";
import React from "react";
import { slideInFromRight } from "../../../public/animationHelperMotion";

function Categories() {
  const parent = {
    left: {},
    normal: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const fromLeft = {
    left: { x: "-100%", opacity: 0 },
    normal: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <motion.div
            variants={parent}
            initial="left"
            whileInView="normal"
            viewport={{ amount: 0.5, once: true }}
            className="accordion"
            id="categoriesAccordion">
            {/* Account Opening */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne">
                  <i
                    className="fa-solid me-3  fa-circle-plus"
                    style={{ color: "#74C0FC" }}></i>
                  Account Opening
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Resident individual</a>
                    </li>
                    <li>
                      <a href="#">Minor</a>
                    </li>
                    <li>
                      <a href="#">Non Resident Indian (NRI)</a>
                    </li>
                    <li>
                      <a href="#">Company, Partnership, HUF and LLP</a>
                    </li>
                    <li>
                      <a href="#">Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Your EquiTrade Account */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="heading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2">
                  <i
                    className="fa-regular fa-user me-3"
                    style={{ color: "#74C0FC" }}></i>
                  Your EquiTrade Account
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Your Profile</a>
                    </li>
                    <li>
                      <a href="#">Account modification</a>
                    </li>
                    <li>
                      <a href="#">
                        Client Master Report (CMR) and Depository Participant
                        (DP)
                      </a>
                    </li>
                    <li>
                      <a href="#">Nomination</a>
                    </li>
                    <li>
                      <a href="#">Transfer and conversion of securities</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Kite */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="heading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3">
                  <i
                    className="fa-solid me-3 fa-shield-halved fa-rotate-90"
                    style={{ color: "#74C0FC" }}></i>
                  Kite
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">IPO</a>
                    </li>
                    <li>
                      <a href="#">Trading FAQs</a>
                    </li>
                    <li>
                      <a href="#">Margin Trading Facility (MTF) and Margins</a>
                    </li>
                    <li>
                      <a href="#">Charts and orders</a>
                    </li>
                    <li>
                      <a href="#">Alerts and Nudges</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Funds */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="heading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4">
                  <i
                    className="fa-solid me-3 fa-indian-rupee-sign"
                    style={{ color: "#74C0FC" }}></i>
                  Funds
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="heading4"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Add money</a>
                    </li>
                    <li>
                      <a href="#">Withdraw money</a>
                    </li>
                    <li>
                      <a href="#">Add bank accounts</a>
                    </li>
                    <li>
                      <a href="#">eMandates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Console */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="heading5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5">
                  <i
                    className="fa-solid me-3 fa-circle-notch"
                    style={{ color: "#74C0FC" }}></i>
                  Console
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                aria-labelledby="heading5"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Corporate actions</a>
                    </li>
                    <li>
                      <a href="#">Funds statement</a>
                    </li>
                    <li>
                      <a href="#">Reports</a>
                    </li>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Segments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Coin */}
            <motion.div variants={fromLeft} className="accordion-item my-4">
              <h2 className="accordion-header" id="heading6">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6">
                  <i
                    className="fa-solid me-3 fa-coins"
                    style={{ color: "#74C0FC" }}></i>
                  Coin
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                aria-labelledby="heading6"
                data-bs-parent="#categoriesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="#">Mutual funds</a>
                    </li>
                    <li>
                      <a href="#">National Pension Scheme (NPS)</a>
                    </li>
                    <li>
                      <a href="#">Fixed Deposit (FD)</a>
                    </li>
                    <li>
                      <a href="#">Features on Coin</a>
                    </li>
                    <li>
                      <a href="#">Payments and Orders</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Announcements + Quick Links */}
        <motion.div {...slideInFromRight} className="col-md-4">
          {/* Announcements */}
          <div
            className="card mb-3"
            style={{
              backgroundColor: "#ff91001a",
              borderLeft: "8px solid #ff9100",
              borderRadius: "5px",
            }}>
            <div className="card-body">
              <ul>
                <li>
                  <a href="#">
                    Exclusion of F&O contracts on 8 securities from August 29,
                    2025
                  </a>
                </li>
                <li>
                  <a href="#">
                    Revision in expiry day of Index and Stock derivatives
                    contracts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="card">
            <div className="card-header">Quick links</div>
            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action">
                1. Track account opening
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                2. Track segment activation
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                3. Intraday margins
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                4. Kite user manual
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Categories;
