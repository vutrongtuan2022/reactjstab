import React from "react";
import image from "../../assets/R.jpg";
import { FaRegPaperPlane } from "react-icons/fa";
import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
function Contract() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <section id="contract ">
        <div className=" container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contract Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have some <b>Question</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={image} alt="Contract" className="w-75" />
            </div>
            <div className="col-md-6">
              <form action="">
                <div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Vui lòng nhập tên"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    Send Message <FaRegPaperPlane className="ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contract;
