import React from "react";
import gallaryone from "../img/gallary1.jpg"
import gallarytwo from "../img/gallary2.jpg"
import gallarythree from "../img/gallary3.jpg"
import gallaryfour from "../img/gallary4.jpg"
import gallaryfive from "../img/gallary5.jpg"
import gallarysix from "../img/gallary6.jpg"
import gallaryseven from "../img/gallary7.jpg"
import gallaryeight from "../img/gallary8.jpg"
import gallarynine from "../img/gallary9.jpg"

function Gallary(){
return (
    <>
 
 <h2 id="industry-h2" className="text-center text-3xl md:text-5xl pt-10 pb-4 px-4" data-aos="fade-up"
        data-aos-anchor-placement="top-center" style={{ color: "#191939", fontWeight:"bolder", fontFamily:"Montserrat" }}>
        Guest Appearance
      </h2>
      <div className="flex justify-center items-center px-4 py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12">
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallaryone} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallarytwo} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallarythree} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallaryfive} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallaryfour} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallarysix} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallaryseven} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallaryeight} alt="" />
            </div>
            <div data-aos="fade-up"
          data-aos-anchor-placement="top-center">
              <img className="h-auto max-w-full rounded-lg" src={gallarynine} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
);
}

export default Gallary