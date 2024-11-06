import React from "react";
import oilimg from "../img/image4.png";
import icon from "../icons/image copy 7.png";
import icon1 from "../icons/image copy 8.png";
import { Link } from "react-router-dom";

function Industrialapplication() {
  return (
    <div
      id="industry"
      style={{ display: "flex", justifyContent: "space-evenly", padding: "0" }}
      className="gap-10 md:gap-0 lg:h-[90vh] items-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="w-[85vw] md:w-8/12" id="indus" style={{ margin: "0px" }} data-aos="fade-up"
        data-aos-anchor-placement="top-center">
        <h6 style={{ color: "#191939", fontWeight:"bolder", fontFamily:"Montserrat" }}>Application</h6>{" "}
        <h2 style={{ color: "#191939", fontWeight:"bolder", fontFamily:"Montserrat" }}>
          <u className="underline">Industrial</u> Application
        </h2>
        <p className="p-i">
        AEP ENG developed carbon-neutral technologies for hazardous waste processing, maximizing resource recovery<br/> and energy extraction for a circular economy.
        </p>
        <p className="p-i">
          AEP ENG worked out the best matching processing parameters for maximum resource recovery and energy <br/>extraction for each waste group by extensive testing of over 200 types of waste.
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="agriculture"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card ">
                <div className="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 className="card-title">Agriculture and Food industry</h5>
                  <p className="card-text">
                  Annual global Manure production output is x3 times larger than of the global Coal mining.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="petro"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card  ">
                <div className="card-body ">
                  <img src={icon1}  alt="#"></img>
                  <h5 className="card-title">PetroChemical Industry</h5>
                  <p className="card-text">
                  We use specialized modules to recycle petrochemical waste, removing impurities and sulfur for energy or refining.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="fmcg"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon}  alt="#"></img>
                  <h5 className="card-title">
                    {" "}
                    Plastic Product & FMCG Industry
                  </h5>
                  <p className="card-text">
                  Food and beverage packaging now uses plastics (PE, LDPE, HDPE, PET, PTF, PVC) with metallic foil, straws, lids, and containers.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="waste"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon} alt="#"></img>
                  <h5 className="card-title">Waste Management Industry</h5>
                  <p className="card-text">
                  Waste management has evolved into a crucial part of the Circular economy, but public education on preliminary waste sorting is essential.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="rubber"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon} alt="#"></img>
                  <h5 className="card-title">
                    Rubber Industry
                  </h5>
                  <p className="card-text">
                  Recycling old tires and rubber goods is challenging due to their durability, but essential for resource recovery and energy extraction.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <Link
              to="transport"
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="card-body">
                  <img src={icon} alt="#"></img>
                  <h5 className="card-title">
                  Transport & Logistics Decarbonization 
                  </h5>
                  <p className="card-text">
                  We help decarbonize transport fuels by creating a stable emulsion of fuel oil and water, suitable for standard engines.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[85vw] md:w-3/12 flex md:hidden xl:flex justify-center items-center" data-aos="fade-right"
        data-aos-anchor-placement="top-center">
        <img id="photooil" src={oilimg} alt="oil"></img>
      </div>
    </div>
  );
}

export default Industrialapplication;
