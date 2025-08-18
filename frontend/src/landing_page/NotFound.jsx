import React from "react";

function NotFound() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center my-5 py-5">
      <div className="row">
        <div className="col">
          <h1 className="fs-1 fw-bold text-primary">404</h1>
          <p className="fs-3">
            We couldn’t find the page you were looking for.
          </p>
          <a
            href="/"
            className="fs-4 text-primary fw-bold text-decoration-none">
            Visit EquiTrade home page
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
