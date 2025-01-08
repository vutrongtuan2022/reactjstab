import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contract
                </a>
              </li>
            </ul>
            <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#">
              Navbar
            </a>
            <button className="btn btn-outline-primary ms-auto px-4 rounded-pill">
              <IoIosLogIn />
              login
            </button>
            <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              <FaUserPlus /> Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
