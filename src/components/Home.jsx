import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import watsapp from "../icons/whatsapp (1).png";
import Topper from "./Topper";
// import Nav from "./Nav";
import background from "../img/hero.jpg";
import Second from "./Second";
import Long from "./Long";
import Industrialapplication from "./Industrialapplication";
import ApplicationByWaste from "./ApplicationByWaste";
import OurTechnologies from "./OurTechnologies";
import Founder from "./Founder";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

// Import founder images
import founderImg1 from "../founder/image.jpg";
import founderImg2 from "../founder/image1.jpg";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-no-repeat h-screen w-screen"
        style={{background : `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${background})` }}
      >
        <Topper />
        <MyNavbar />
        <div
          id="home1"
          className="h-[40rem] md:h-[30rem] lg:h-auto flex flex-col items-center md:items-auto justify-center md:justify-between"
        >
          <h1
            id="hi"
            className="text-6xl lg:text-7xl md:!mt-40 lg:mt-0"
          >
            ⁠Carbon emission negative and energy effective solutions
          </h1>
          {/* <p
            id="home-p"
            style={{ textShadow: " 0 0 3px #FFF, 0 0 5px #0000FF" }}
          >
            Carbon emission negative and energy effective solutions
          </p> */}
          {/* <div id="buttons" className="flex flex-row items-center justify-center">
            <button className="w-32" id="orange-button">Get a Quote {">"}</button>
            <button className="w-32" id="white-button">Get a Quote {">"}</button>
            <Link className="z-10 relative" target="_blank" to='https://wa.me/(+62) 888-800-212'>
              <img
                className="watsappicon"
                src={watsapp}
                alt="whatsapp-icon"
              ></img>
            </Link>
          </div> */}
        </div>
      </div>
      <Second />
      <Long />
      <Industrialapplication />
      <ApplicationByWaste />
      <OurTechnologies />
      <Founder
        name="Dr. Vitaliy SHABLOV, PhD (Eco.Safety)"
        h="OUR FOUNDER"
        image={founderImg1}
        description="Dr. Vitaliy Shablov, Co-founder, Director, and CTO of AEP ENG (EU) and AEP TECH (Singapore), brings over 20 years of expertise in oil refinery processing equipment, HVAC, boiler making, heat exchangers, and waste management. His skills in innovation, design, and environmental safety are pivotal to AEP's success. A proponent of Kaizen and non-stop innovation, Vitaliy excels in applied research and development, leading to significant scientific advancements. Born in Ukraine and a former Navy Seal of the Pacific Fleet Marine Corps, he is a disciplined, pragmatic, and inquisitive researcher with a tireless work ethic. Vitaliy is a devoted father, sports enthusiast, and holder of numerous patents. Known for his integrity, optimism, and sense of humor, he inspires and energizes his multinational team."
      />
      <Founder
        name="Andrey KOLMOGOROV, BS.Eng, MA Intl.Econ, Dipl.FS FP"
        image={founderImg2}
        description="
Andrey, Co-Founder, Director, and CEO of AEP TECH (Singapore) and regional Director of AEP ENG (EU), brings 30 years of experience in engineering, business, and economics across the Asia-Pacific region. Born in Manchuria, he has held diverse roles, including Navy sub engineer, liaison officer, and supervisor in the Russian government, UNDP coordinator, and MOFA Japan program CIR. He also worked as a commodity trader for a Fortune-100 Japanese corporation and has been an entrepreneur in Japan and Australia. Andrey’s business acumen, extensive network, and proficiency in multiple languages have been key to AEP's growth. Known for his pragmatic mindset, integrity, and sharp negotiation skills, he persistently seeks optimal outcomes. A perpetual traveler, Andrey balances work and family while pursuing esoterica and oriental studies, striving for knowledge, results, and harmony.
"
      />
      <Footer />
    </>
  );
}

export default Home;
