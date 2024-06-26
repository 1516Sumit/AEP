import React from "react";
import building from "../img/image copy 2.png";
// import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function Second() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "centre",
      }}
      data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
    >
      <div id="second-box" className="flex justify-center items-center md:justify-auto md:items-auto md:flex-row flex-col h-auto md:h-[70vh] w-[95vw] md:w-[80vw]" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
        <div className="md:w-2/4" >
          <img className="md:h-[70vh] md:w-[40vw]" src={building} id="building" alt="buliding"></img>
        </div>
        <div id="text-box" className=" w-full md:w-2/4 md:h-[70vh] pt-8 md:p-8 lg:p-16" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <h6 style={{ color: "#2C3539" }}>our story</h6>
          <h2 >AEP Technolgy</h2>
          <hr style={{ width: "10vw", height: "5px", margin: "0", color: "#2C3539" }}></hr>
          <p className="buildText text-lg">
          AEP Engineering, located at Stanislavowska 47, Wroclaw, Poland, is led by Vitaly Shablov, Ph.D. The company specializes in innovative manufacturing and engineering, focusing on waste processing, filtration, gasification, and energy-efficient technologies. With multiple divisions, including research labs and software development, AEP Engineering employs a skilled team of scientists, technologists, and IT professionals. They develop equipment for pyrolysis, fuel emulsions, gas purification, multi-fuel engines, and microbiological treatments. Their research center supports the development of alternative fuels and eco-friendly waste processing technologies, having completed over 25 innovative projects across various industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Second;
