import React from "react";
import image from "../../assets/R.jpg";
import Home from "../home/Home";
import Services from "../services/Services";
import Contract from "../contract/Contract";
function About() {
  return (
    <div>
      <Home />
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row ">
            <div className="col-md-6">
              <img src={image} alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis exercitationem hic eos aspernatur? Adipisci, optio.
                Dignissimos, ducimus accusantium quos laudantium adipisci harum
                omnis. Omnis eligendi suscipit ea, temporibus unde excepturi
                ducimus officia pariatur assumenda saepe rerum voluptatum
                repellendus, quidem ullam dicta iste. Doloribus adipisci numquam
                ducimus. Exercitationem nisi commodi architecto.
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Get Started
              </button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Contract />
    </div>
  );
}

export default About;
