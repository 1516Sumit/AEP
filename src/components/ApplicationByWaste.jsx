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
        backgroundRepeat: "no-repeat",
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
          AEP ENG specializes in comprehensive waste management solutions using advanced pyrolysis technology. Our modular plants, such as Pulsar-BIO and Pulsar-EL, are designed to handle a wide range of waste types effectively, from agricultural residues and rubber goods to complex plastics and hazardous biomedical waste. These solutions focus on maximizing resource recovery and energy extraction while minimizing environmental impact, achieving significant ESG (Environmental, Social, Governance) outcomes.
        </p>
        <p>
          For instance, our carbon-negative Pulsar-EL plant processes municipal solid waste (MSW) with high efficiency, utilizing automated sorting and advanced pyrolysis to convert waste into valuable products like synthetic gases and carbon black, while mitigating harmful emissions. We also address specific challenges, such as tyre and windfarm turbine blade recycling, by optimizing thermochemical processes that transform waste into usable materials and energy sources.
        </p>
        <p>
          Through innovation and a commitment to sustainability, AEP ENG supports global efforts towards a circular economy, enhancing waste recycling rates and contributing to cleaner, more resilient communities worldwide.
        </p>
        <p>
          AEP ENG pioneers decarbonization solutions for transport fuels through innovative emulsification processes. Our technology transforms fuel oils by blending them with freshwater, removing impurities like sulfur and enhancing combustion efficiency. This sustainable approach reduces carbon emissions significantly compared to conventional fuels, supporting the transition to cleaner energy systems.
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
                    AEP ENG offers highly efficient, environmentally friendly modular solutions for organic waste recycling with maximum value and carbon-negative impact.
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
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Fuel Waste</h5>
                  <p class="card-text">
                    Advanced processing removes contaminants from waste, producing semi-finished fuels or energy, boosting refinery efficiency with Pulsar-EL.
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
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Plastic Waste</h5>
                  <p class="card-text">
                  Plastics mix waste includes various types like PE, HDPE, LDPE, PET, PETF, PS, PVC, posing recycling challenges due to compatibility issues.
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
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Municipal Solid Waste </h5>
                  <p class="card-text">
                  Global MSW grows with population consumption, posing challenges in collection, transport, storage, sorting, recycling, and educating for efficient waste management.
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
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Rubber Waste</h5>
                  <p class="card-text">
                  Rubber goods like the end of lifecycle tyres and conveyor belts are suitable for pyrolysis recycling and resource recovery, energy extraction from rubber waste. 
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
                  <img src={icon} alt="#"></img>
                  <h5 class="card-title">Bio Hazard Waste</h5>
                  <p class="card-text">
                  Bio-labs, medical, and pharmaceutical hazard waste includes infectious materials, chemicals, and sharps, requiring specialized handling and disposal protocols.
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
