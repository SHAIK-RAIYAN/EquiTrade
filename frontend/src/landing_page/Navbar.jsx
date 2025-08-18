import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="media/logo.svg"
            alt="Logo"
            className="ms-sm-3"
            style={{ height: "2.5rem", width: "auto" }}
          />
          {/*  logo */}
        </NavLink>

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
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }>
                Signup
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }>
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }>
                Products
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }>
                Pricing
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }>
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
