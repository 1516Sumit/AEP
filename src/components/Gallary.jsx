import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import gallaryone from "../img/gallary1.jpg"
import gallarytwo from "../img/gallary2.jpg"
import gallarythree from "../img/gallary3.jpg"
import gallaryfour from "../img/gallary4.jpg"
import gallaryfive from "../img/gallary5.jpg"
import gallarysix from "../img/gallary6.jpg"
import gallaryseven from "../img/gallary7.jpg"
import gallaryeight from "../img/gallary8.jpg"
import gallarynine from "../img/gallary9.jpg"
// import { Link } from "react-router-dom";

function Gallary() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="guest"></div>
      <h2 id="industry-h2" className="text-center text-3xl md:text-5xl pt-10 pb-4 px-4" data-aos="fade-up"
        data-aos-anchor-placement="top-center" style={{ color: "#191939", fontWeight: "500", fontFamily: "Montserrat" }}>
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
      <div
        id="buttons"
        className="flex flex-row items-center justify-center py-5"
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
    </>
  );
}

export default Gallary