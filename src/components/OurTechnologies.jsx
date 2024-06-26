import React from "react";
import icon from "../icons/image copy 7.png";
// import { right } from "@popperjs/core";
import { Link } from "react-router-dom";

function OurTechnologies() {
  return (
    <div className="py-[5vw] px-[8vw]" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
      <h1 style={{ textAlign: "center" }} data-aos="fade-up"
        data-aos-anchor-placement="top-center">Our Technologies</h1>
      <div className="row justify-content-center lg:justify-content-auto">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="OurInnovationInPyrolysis"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Our innovation in Pyrolysis</h5>
                <p class="card-text">
                Advanced pyrolysis processing of waste to clean Energy of choice without burning oxygen, without exhaust or emissions.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="PulseDryer"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Pulse Dryer</h5>
                <p class="card-text">
                Pulse drying rapidly reduces material moisture content to 10%, achieving 90% removal efficiently.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="ShockCondensation"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Shock Condensation</h5>
                <p class="card-text">
                Our tech rapidly converts gases to liquids via shock condensation, producing synthetic fuels without traditional refinery towers.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center lg:justify-content-auto">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="GasCleansing"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Gas Cleansing</h5>
                <p class="card-text">
                Ionization technology cleanses industrial flue gas, effectively removing CO and CO2, ensuring a safer and cleaner environment.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="WasteWaterReacycling"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">Waste Water Reacycling</h5>
                <p class="card-text">
                Developing large-scale technology to harvest fresh water from atmospheric air, addressing industrial water needs sustainably and efficiently.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="FlowBattery"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">
                  Powder Battery Reduction Oxidation / Flow Battery
                </h5>
                <p class="card-text">
                Direct flow PBR LEST offers superior performance to Tesla Li-ion batteries in power storage and local electricity station applications.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div class="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <Link
            to="PyrolysisofMethane"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            <div class="card">
              <div class="card-body">
                <img src={icon}></img>
                <h5 class="card-title">
                  Pyrolysis of Methane into Green Hydrogen
                </h5>
                <p class="card-text">
                Legacy problems of the Pyrolysis gas purification and condensation of liquid hydrocarbons during pyrolysis         plants operation we solved.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurTechnologies;
