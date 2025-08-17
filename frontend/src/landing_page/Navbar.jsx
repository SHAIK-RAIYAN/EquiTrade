import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="media/logo.svg"
            alt="Logo"
            className="ms-sm-3"
            style={{ height: "2.5rem", width: "auto" }}
          />
          {/*  logo */}
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0 bg-white shadow-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo03">
          <ul className="navbar-nav gap-3">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
