import React from "react";
import { appear } from "../../../public/animationHelperMotion";
import { motion } from "framer-motion";

function ChargesTable() {
  return (
    <div className="container py-4 my-5 col-lg-9 mx-md-auto">
      <motion.div {...appear} className="mb-5">
        <h3 className="mb-3">Charges for account opening</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th className="fw-normal p-md-3">Type of account</th>
              <th className="fw-normal p-md-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Online account</td>
              <td className="p-2">
                <span className="badge " style={{ backgroundColor: "#4caf50" }}>
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-2">Offline account</td>
              <td className="p-2">
                <span className="badge " style={{ backgroundColor: "#4caf50" }}>
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-2">NRI account (offline only)</td>
              <td className="p-2">₹ 500</td>
            </tr>
            <tr>
              <td className="p-2">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="p-2">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
      <motion.div {...appear} className="pt-md-5">
        <h3 className=" mb-3">Demat AMC (Annual Maintenance Charge)</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th className="fw-normal p-md-3">Value of holdings</th>
              <th className="fw-normal p-md-3">AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Up to ₹4 lakh</td>
              <td className="p-2">
                <span className="badge " style={{ backgroundColor: "#4caf50" }}>
                  FREE*
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-2">₹4 lakh – ₹10 lakh</td>
              <td className="p-2">₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td className="p-2">Above ₹10 lakh</td>
              <td className="p-2">₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="fs-6 text-muted">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account.
          </p>
        </div>
      </motion.div>

      <motion.div {...appear} className="pt-md-5">
        <h3 className=" mb-3">Charges for optional value added services</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th className="fw-normal p-md-3">Service</th>
              <th className="fw-normal p-md-3">Billing Frquency</th>
              <th className="fw-normal p-md-3">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Tickertape</td>
              <td className="p-2">Monthly / Annual</td>
              <td className="p-2">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td className="p-2">Smallcase</td>
              <td className="p-2">Per transaction</td>
              <td className="p-2">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td className="p-2">Kite Connect</td>
              <td className="p-2">Monthly</td>
              <td className="p-2">Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default ChargesTable;
