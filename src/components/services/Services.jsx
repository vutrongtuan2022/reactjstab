import React from "react";
import {
  FaCogs,
  FaLaptopCode,
  FaMobileAlt,
  FaRegFileCode,
  FaUsers,
} from "react-icons/fa";
import { LiaStarHalfSolid } from "react-icons/lia";
import Home from "../home/Home";
import About from "../about/About";
import Contract from "../contract/Contract";

function Services() {
  return (
    <div>
      <Home />
      <About />
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <FaCogs size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Highly Customizable
                  </h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <FaMobileAlt size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Fully Responsive Layout
                  </h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <FaUsers size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">Users Expert</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <FaLaptopCode size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Creative Web Design
                  </h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <FaRegFileCode size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Unique and Clean
                  </h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                  <LiaStarHalfSolid size={82} className="mb-4 text-primary" />
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Creative Ideas
                  </h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contract />
    </div>
  );
}

export default Services;
