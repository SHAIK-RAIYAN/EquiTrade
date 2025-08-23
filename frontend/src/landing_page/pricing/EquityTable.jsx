import { motion } from "framer-motion";
import React from "react";
import { appear } from "../../../public/animationHelperMotion";

function EquityTable() {
  return (
    <motion.div {...appear} className="container my-5 col-lg-9 mx-md-auto">
      <h3 className="mb-3 pb-2">
        <span className="border-bottom border-2 border-primary">
          &emsp;Equity&emsp;
        </span>
      </h3>

      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th className="fw-normal p-md-3"></th>
              <th className="fw-normal p-md-3">Equity delivery</th>
              <th className="fw-normal p-md-3">Equity intraday</th>

              <th className="fw-normal p-md-3 d-none d-lg-table-cell">
                F&amp;O - Futures
              </th>
              <th className="fw-normal p-md-3 d-none d-lg-table-cell">
                F&amp;O - Options
              </th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td className="p-md-3">Brokerage</td>
              <td className="p-md-3">Zero Brokerage</td>
              <td className="p-md-3">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                Flat Rs. 20 per executed order
              </td>
            </tr>
            <tr>
              <td className="p-md-3">STT/CTT</td>
              <td className="p-md-3">0.1% on buy &amp; sell</td>
              <td className="p-md-3">0.025% on the sell side</td>
              <td className="p-md-3 d-none d-lg-table-cell">
                0.02% on the sell side
              </td>
              <td className="text-start d-none d-lg-table-cell">
                <ul className="mb-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="p-md-3">Transaction charges</td>
              <td className="p-md-3">
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td className="p-md-3">
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                NSE: 0.00173% <br /> BSE: 0
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <td className="p-md-3">GST</td>
              <td className="p-md-3">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="p-md-3">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td className="p-md-3">SEBI charges</td>
              <td className="p-md-3">₹10 / crore</td>
              <td className="p-md-3">₹10 / crore</td>
              <td className="p-md-3 d-none d-lg-table-cell">₹10 / crore</td>
              <td className="p-md-3 d-none d-lg-table-cell">₹10 / crore</td>
            </tr>
            <tr>
              <td className="p-md-3">Stamp charges</td>
              <td className="p-md-3">0.015% or ₹1500 / crore on buy side</td>
              <td className="p-md-3">0.003% or ₹300 / crore on buy side</td>
              <td className="p-md-3 d-none d-lg-table-cell">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="p-md-3 d-none d-lg-table-cell">
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default EquityTable;
