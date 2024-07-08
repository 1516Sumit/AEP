import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import watsapp from "../icons/whatsapp (1).png";
import Topper from "./Topper";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

function Props(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
       className="bg-cover bg-no-repeat h-screen w-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),  url(${props.background})`,
          height: "100vh",
        }}
      >
        <Topper />
        <MyNavbar />
        <div
          id="home1"
          className="h-[40rem] md:h-[30rem] lg:h-auto flex flex-col items-center md:items-auto justify-center md:justify-between"
        >
          <h1
            id="hi"
            className="!text-5xl md:!text-7xl lg:text-8xl md:!mt-40 lg:mt-0 md:!mb-4"
          >
            {props.heading}
          </h1>
          <p id="home-p" className="text-white text-3xl ">
            {props.sub}
          </p>
          <div
            id="buttons"
            className="flex flex-row items-center justify-center"
          >
            <button className="w-36" id="orange-button">
              Get a Quote {">"}
            </button>
            <button className="w-36" id="white-button">
              Get a Quote {">"}
            </button>
            <Link className="z-10 relative" target="_blank" to="https://wa.me/(+62) 888-800-212">
              <img
                className="watsappicon"
                src={watsapp}
                alt="whatsapp-icon"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      {props.para && (
        <div className="flex flex-col gap-10 my-10 mx-2 md:mt-32">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para1}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para2}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para3}
          </p>
        </div>
      )}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-4xl"
      >
        <h1>{props.subHead}</h1>
      </div>
      {props.para4 && (
        <><div className="flex flex-col gap-10  my-10 mx-2 md:m-10">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para4}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para5}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para6}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para7}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para8}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para9}
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center text-lg md:text-2xl px-4 md:px-40"
          >
            {props.para10}
          </p>
        </div><Footer /></>
      )}
    </>
  );
}

export default Props;
