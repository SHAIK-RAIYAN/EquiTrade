import React from "react";
import { delay, motion, stagger } from "framer-motion";

function FAQ() {
  const parent = {
    left: {},
    normal: {
      transition: {
        staggerChildren: 0.5,
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
    <div className="container my-5 col-md-9">
      <h2 className="mb-4 fw-bold">FAQs</h2>
      <motion.div
        variants={parent}
        initial="left"
        whileInView="normal"
        viewport={{ amount: 0.5, once: true }}
        className="accordion"
        id="faqAccordion">
        <motion.div variants={fromLeft} className="accordion-item my-3">
          <h2 className="accordion-header" id="heading1">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="false"
              aria-controls="collapse1">
              What is a EquiTrade account?
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse"
            aria-labelledby="heading1"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              A EquiTrade account is a combined demat and trading account that
              allows investors to buy, sell, and hold securities digitally.
            </div>
          </div>
        </motion.div>

        <motion.div variants={fromLeft} className="accordion-item my-3">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2">
              What documents are required to open a demat account?
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              The following documents are required to open a EquiTrade account
              online:
              <ul>
                <li>PAN number</li>
                <li>Aadhaar Card (linked with mobile for OTP verification)</li>
                <li>Cancelled cheque or bank account statement</li>
                <li>Income proof (only if trading Futures & Options)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fromLeft} className="accordion-item my-3">
          <h2 className="accordion-header" id="heading3">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3">
              Is EquiTrade account opening free?
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse"
            aria-labelledby="heading3"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">Yes, it is completely free.</div>
          </div>
        </motion.div>

        <motion.div variants={fromLeft} className="accordion-item my-3">
          <h2 className="accordion-header" id="heading4">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4">
              Are there any maintenance charges for a demat account?
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              The account maintenance charges are based on account type:
              <ul>
                <li>
                  <b>Basic Services Demat Account:</b> Zero charges if holdings
                  &lt; ₹4,00,000
                </li>
                <li>
                  <b>Regular Demat Account:</b> ₹300/year + GST
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fromLeft} className="accordion-item my-3">
          <h2 className="accordion-header" id="heading5">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5">
              Can I open a demat account without a bank account?
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse"
            aria-labelledby="heading5"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You must have a bank account in your name to open a demat account.
              <br />
              If UPI verification succeeds, no proof of bank is needed.
              Otherwise, a cancelled cheque or bank statement must be provided.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FAQ;
