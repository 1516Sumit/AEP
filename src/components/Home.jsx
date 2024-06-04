import React from "react";
import watsapp from "../icons/whatsapp (1).png";
import Topper from "./Topper";
import Nav from "./Nav";
import background from "../img/image.png";
import Second from "./Second";
import Long from "./Long";
import Industrialapplication from "./Industrialapplication";
import ApplicationByWaste from "./ApplicationByWaste";
import OurTechnologies from "./OurTechnologies";
import Founder from "./Founder";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {" "}
      <div
        id="home"
        style={{ backgroundImage: `url(${background})`, height: "100vh" }}
      >
        <Topper />
        <Nav />
        <div id="home1">
          <h1 id="hi">Energy Resource & Oil Exploration project.</h1>
          <p id="home-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div id="buttons">
            <button id="orange-button">Get a Quote ></button>
            <button id="white-button">Get a Quote ></button>
            <a>
              <img
                className="watsappicon"
                src={watsapp}
                alt="whatsapp-icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <Second />
      <Long />
      <Industrialapplication />
      <ApplicationByWaste />
      <OurTechnologies />
      <Founder name="Dr. Vitaliy SHABLOV, PhD (Eco.Safety)" h="OUR FOUNDER" />
      <Founder name="Andrey KOLMOGOROV, BS.Eng, MA Intl.Econ, Dipl.FS FP" />
      <Footer />
    </>
  );
}

export default Home;
