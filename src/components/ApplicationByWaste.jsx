import React from "react";
import thisback from "../img/img1.png";
import icon from "../icons/image copy 7.png";
import { Link } from "react-router-dom";

function ApplicationByWaste() {
  return (
    <div
      id="abyw"
      style={{
        display: "flex",
        padding: "5vw 5vw 5vw 5vw",
        background: `url(${thisback})`,
        backgroundSize: "cover",
        backgroundRepeat:  "no-repeat",
        margin: "20px 0 20px 0",
      }}

      className="gap-10 md:gap-4 w-screen flex-col items-center lg:flex-row"
      data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
    >
      <div className="w-[85vw] lg:w-2/4 text-white" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
        <h6 style={{ color: "#2C3539" }}>Application</h6>
        <h2>
          <u className="underline">Application</u> By Wastes
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
        <p>
          Penatibus condimentum enim arcu finibus litora turpis eget. Tempor
          neque feugiat
        </p>
        <p>
          Penatibus condimentum enim arcu finibus litora turpis eget. Tempor
          neque feugiat
        </p>
        <p>
          vivamus. Fames volutpat sagittis vitae dignissim gravida. Gravida
          dapibus lacus nam at habitant vivamus maximus. Eros donec vivamus.
          Fames volutpat sagittis vitae dignissim gravida. Gravida dapibus lacus
          nam at habitant vivamus maximus. Eros donec convallis eget viverra
          sollicitudin luctus quam senectus nunc sem vivamus. Fames volutpat
          sagittis vitae dignissim gravida.{" "}
        </p>
      </div>
      <div className="w-[85vw] lg:w-2/4">
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="agriculturalWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Agricultural Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="fuelWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 class="card-title">Fuel Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="plastic"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 class="card-title">Plastic Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="municipalWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 class="card-title">Municipal Solid Waste </h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="rubberWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 class="card-title">Rubber Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <Link
              to="bioHazardWaste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div class="card">
                <div class="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 class="card-title">Bio Hazard Waste</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ApplicationByWaste;
