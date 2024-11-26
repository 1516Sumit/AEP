import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from 'react-parallax-tilt';
import watsapp from "../icons/whatsapp (1).png";
import Topper from "./Topper";
// import Nav from "./Nav";
// import background from "../img/hero.jpg";
import backgroundVideo from '../video/BgVideo.mp4'
import Second from "./Second";
// import Long from "./Long";
import Industrialapplication from "./Industrialapplication";
import ApplicationByWaste from "./ApplicationByWaste";
import OurTechnologies from "./OurTechnologies";
import Founder from "./Founder";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

// Import founder images
import founderImg1 from "../founder/image.jpg";
import founderImg2 from "../founder/image1.jpg";
import Gallary from "./Gallary";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const phoneNumber = '62888800212'; // International format without + or special characters
  const preFilledMessage = encodeURIComponent("Hello, I would like to inquire about your services.");

  return (
    <>
      <div
        className="relative h-screen w-screen"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))`,
        }}
      >
        <video
          className="absolute top-0 left-0 w-screen h-screen object-cover md:object-fill"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Topper />
        <MyNavbar />
        <div
          id="home1"
          className="relative h-[40rem] md:h-[30rem] lg:h-auto flex flex-col items-center md:items-auto justify-center md:justify-between overflow-hidden"
        >
          <Tilt tiltMaxAngleX={12}
            tiltMaxAngleY={12}>
            <h1
              id="hii"
              className="text-6xl lg:text-7xl md:!mt-40 lg:mt-0"
              style={{ textShadow: "12px 8px 30px rgba(0, 0, 0, 0.92)" }}
            >
              ⁠Carbon emission negative and energy effective solutions
            </h1>
          </Tilt>
          {/* <p
            id="home-p"
            style={{ textShadow: " 0 0 3px #FFF, 0 0 5px #0000FF" }}
          >
            Carbon emission negative and energy effective solutions
          </p> */}
          <div
            id="buttons"
            className="flex flex-row items-center justify-center"
          >
            <button className="w-auto" id="orange-button" onClick={handleShow}>
              Get In Touch With Us
            </button>
            <Link className="z-10 relative" target="_blank" to={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}>
              <img
                className="watsappicon"
                src={watsapp}
                alt="whatsapp-icon"
              ></img>
            </Link>
          </div>
        </div>
      </div >
      <Second />
      {/* <Long /> */}
      <Industrialapplication />
      <ApplicationByWaste />
      <OurTechnologies />
      <Founder
        name="Dr. Vitaliy SHABLOV, PhD (Eco.Safety)"
        h="OUR FOUNDERS"
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
      <Gallary />
      <Footer />

      <Modal show={show} onHide={handleClose} >
        <div className="flex flex-col w-full">
          {/* <div>
            {" "}
            <img alt="#" src={conimg} style={{ width: "20vw" }} />
          </div> */}
          <div>
            <Modal.Header closeButton>
              <div className="flex flex-col">
                <Modal.Title>Contact Us</Modal.Title>
                <p>Any question or remarks? Just write us a message!</p>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="flex flex-col">
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </div>
                <div className="flex flex-col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="Number" />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>What Brings You Here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {/* {["checkbox", "radio"].map((type) => ( */}
                <div className="flex flex-col justify-evenly items-start mb-3">
                  <Form.Label>What is the best place to contact you:</Form.Label>
                  <div className="flex flex-row items-start justify-center">
                    <Form.Check
                      inline
                      label="Email"
                      name="Email"
                    // type={type}
                    // id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Phone"
                      name="Phone"
                    // type={type}
                    // id={`inline-${type}-2`}
                    />
                  </div>
                  {/* <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      // type={type}
                      // id={`inline-${type}-3`}
                    /> */}
                </div>
                {/* ))} */}

                <div className="flex flex-col justify-evenly items-start mb-3">
                  <Form.Label>How did you get to know about us:</Form.Label>
                  <div className="flex flex-wrap flex-row items-start md:justify-center">
                    <Form.Check
                      inline
                      label="Social Media"
                      name="Email"
                    // type={type}
                    // id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Events"
                      name="Phone"
                    // type={type}
                    // id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="News Articals"
                      name="News"
                    // type={type}
                    // id={`inline-${type}-3`}
                    />
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Send Message
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Home;
