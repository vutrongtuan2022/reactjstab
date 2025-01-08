import React from "react";
import image from "../../assets/R.jpg";
function About() {
  return (
    <div>
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
                Perferendis ex rem exercitationem animi maiores sunt harum
                quibusdam ratione minima eligendi quaerat nesciunt mollitia sed
                laborum quasi commodi alias tempore suscipit reiciendis porro
                itaque labore, magni voluptas! Aperiam ad, recusandae facere
                doloremque cupiditate, obcaecati eaque nesciunt quaerat repellat
                numquam harum aliquid?
              </p>
            </div>
            {/* <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feels the Fresh Business Perspective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi ut excepturi atque voluptate perferendis mollitia.
                Dolores ullam pariatur aspernatur asperiores sequi ex totam,
                commodi placeat illum eligendi, dolor similique deserunt.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-ountline-light rounded-pill px-4 py-2">
                  Get Quote
                </button>
              </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
