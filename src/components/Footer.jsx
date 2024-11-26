import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo/image.png";
import facebookLogo from "../icons/image.png";
import linkedinLogo from "../icons/image copy.png";
import instagram from "../icons/instagram.png";
import youtubeLogo from "../icons/image copy 3.png";

function Footer() {
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <div className="flex flex-col w-full">
          {/* <div>
            {" "}
            <img alt="#" src={conimg} style={{ width: "20vw" }} />
          </div> */}
          <div>
            <Modal.Header closeButton>
              <div className="flex flex-col">
                <Modal.Title>Conect with Us</Modal.Title>
                {/* <p>Any question or remarks? Just write us a message!</p> */}
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

      <footer class="h-auto md:h-[50vh] bg-black p-5 mt-10 w-full" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <img id="aep" className="bg-transparent" src={logo} alt="logo" />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> */}
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link className="text-decoration-none text-white" to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</Link>



                  </li>
                  <li>
                    <a className="text-decoration-none text-white" href="/#guest" >Guest Appearance</a>
                  </li>
                </ul>
              </div>
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link className="text-decoration-none text-white" to="/Projects">Projects</Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none text-white" onClick={handleShow} >Career</Link>
                  </li>
                </ul>
              </div>
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/pdfFiles" className="text-decoration-none text-white">Resources</a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-white">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 AEP. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center items-center sm:mt-0">
              <Link target='_blank' to='https://www.facebook.com/'>
                <img
                  className="social-media"
                  src={facebookLogo}
                  alt="BigCo Inc. logo"
                />
              </Link>
              <Link target='_blank' to='https://www.linkedin.com/'>
                <img
                  className="social-media"
                  src={linkedinLogo}
                  alt="BigCo Inc. logo"
                />
              </Link>
              <Link target='_blank' to='https://www.instagram.com/'>
                <img className="social-media" src={instagram} alt="BigCo Inc. logo" />
              </Link>
              <Link target='_blank' to='https://www.youtube.com/'>
                <img
                  className="social-media"
                  src={youtubeLogo}
                  alt="BigCo Inc. logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* <div className="h-auto md:h-[50vh] bg-black p-5 m-0 w-full flex flex-col justify-around gap-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"> */}
      {/* <div className="bg-[#191939] w-full flex justify-between items-center flex-col md:flex-row gap-10 md:gap-0 h-auto md:h-[10vh] rounded-md p-12">
        <div className="text-white">
          <span className="text-2xl lg:text-3xl">
            It will help you improve your writing<br /> & bring ideas more
            clearly.
          </span>
        </div>
        <div>
          <button
            className="bg-white rounded-md font-bold py-3 px-8 lg:px-12" 
            id="footer-btn"
          >
            About Us
          </button>
        </div>
      </div> */}
      {/* <div className="flex justify-around flex-col md:flex-row items-start gap-10 md:gap-0 md:items-center text-white">
        <div className="flex flex-col">
          <h6 className="mb-2">Company</h6>
          <Link className="text-decoration-none text-white" to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</Link>
          <a className="text-decoration-none text-white" href="/#guest" >Guest Appearance</a>
          <Link className="text-decoration-none text-white" to="/Works">Works</Link>
          <Link className="text-decoration-none text-white" to="/" >Career</Link>
        </div> */}
      {/* <div className="flex flex-col">
          <h6 className="mb-2">Help</h6>
          <Link className="text-decoration-none text-white" href="/" >Customer Support</Link>
          <Link className="text-decoration-none text-white" href="/" >Delivery Details</Link>
          <Link className="text-decoration-none text-white" href="/" >Terms & Conditions</Link>
          <Link className="text-decoration-none text-white" href="/" >Privacy Policy</Link>
        </div> */}
      {/* <div className="flex flex-col">
          <h6 className="mb-2">Resources</h6>
          <Link className="text-decoration-none text-white" href="/" >Free eBooks</Link>
          <Link className="text-decoration-none text-white" href="/" >Development Tutorial</Link>
          <Link className="text-decoration-none text-white" href="/" >How to - Blog</Link>
          <Link className="text-decoration-none text-white" href="/" >Youtube Playlist</Link>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-2">Social Media</h6>
          <div className="flex flex-col justify-evenly gap-2" style={{ margin: "1%" }}>
            <Link target='_blank' to='https://www.facebook.com/'>
              <img
                className="social-media"
                src={facebookLogo}
                alt="BigCo Inc. logo"
              />
            </Link>
            <Link target='_blank' to='https://www.linkedin.com/'>
              <img
                className="social-media"
                src={linkedinLogo}
                alt="BigCo Inc. logo"
              />
            </Link>
            <Link target='_blank' to='https://www.instagram.com/'>
              <img className="social-media" src={instagram} alt="BigCo Inc. logo" />
            </Link>
            <Link target='_blank' to='https://www.youtube.com/'>
              <img
                className="social-media"
                src={youtubeLogo}
                alt="BigCo Inc. logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default Footer;
