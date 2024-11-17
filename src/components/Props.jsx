import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            className="!text-5xl md:!text-7xl lg:text-8xl md:!mt-56 lg:mt-0 md:!mb-4"
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
            <button className="w-auto" id="orange-button">
              Get In Touch With Us
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
        </div>

        <div
        id="buttons"
        className="flex flex-row items-center justify-center"
      >
        <button to='/' className="w-36" id="gallary-button" onClick={handleShow}>
          Contact Us
        </button>
      </div>

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
        <Footer /></>
      )}
    </>
  );
}

export default Props;
