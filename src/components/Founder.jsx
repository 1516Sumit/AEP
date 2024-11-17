import React from "react";

function Founder(props) {
  return (
    <>
    <div className="overflow-hidden" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
      <h2 id="industry-h2" className="text-center text-3xl md:text-5xl" data-aos="fade-up"
        data-aos-anchor-placement="top-center" style={{ color: "#191939", fontWeight:"500", fontFamily:"Montserrat" }}>
        {props.h}
      </h2>
      <div
        id="founder"
        className="flex justify-evenly items-center flex-col md:flex-row gap-4 md: gap-0mt-4 p-4 md:mt-14"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <img
          id="founder-img"
          className="w-5/12 lg:w-1/4"
          src={props.image}
          alt={`${props.name}`}
          data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        />
        <div className="w-10/12 md:w-2/4 m-0" data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          <h3 id="industry-h" className="text-xl md:text-4xl" style={{ color: "#191939", fontWeight:"500", fontFamily:"Montserrat" }}>
            {props.name}
          </h3>
          <p className="p-f text-base xl:text-lg">{props.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Founder;
