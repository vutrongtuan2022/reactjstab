import React from "react";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
