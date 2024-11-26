import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo/image.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import conimg from "../img/image copy 6.png";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Navbar className="relative py-2 px-4 sm:p-0" id="navi" expand="lg" bg="transparent" variant="light" style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
      }}>
        <Navbar.Brand as={Link} to="/" onClick={(e) => handleLinkClick(e, '/')}>
          <img id="aep" className="bg-transparent" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" className="!bg-white"/>
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end text-white">
          <Nav>
            <Nav.Link className="font-poppins text-white" as={Link} to="/about" onClick={(e) => handleLinkClick(e, '/about')}>
              About Us
            </Nav.Link>
            <Nav.Link className="font-poppins text-white" as={Link} to="/" onClick={(e) => handleLinkClick(e, '/about')}>
              News
            </Nav.Link>
            <NavDropdown className="text-white" title={<span className="text-white">Services</span>} id="navbarDropdownMenuLink">
              <NavDropdown.Item as={Link} to="/OurInnovationInPyrolysis" onClick={(e) => handleLinkClick(e, '/agriculturalWaste')}>Our innovation in Pyrolysis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PulseDryer" onClick={(e) => handleLinkClick(e, '/fuelWaste')}>Pulse Dryer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ShockCondensation" onClick={(e) => handleLinkClick(e, '/plastic')}>Shock Condensation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/GasCleansing" onClick={(e) => handleLinkClick(e, '/municipalWaste')}>Gas Cleansing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WasteWaterReacycling" onClick={(e) => handleLinkClick(e, '/rubberWaste')}>Waste Water Reacycling</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FlowBattery" onClick={(e) => handleLinkClick(e, '/bioHazardWaste')}>Powder Battery Reduction Oxidation / Flow Battery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PyrolysisofMethane" onClick={(e) => handleLinkClick(e, '/bioHazardWaste')}>Pyrolysis of Methane into Green Hydrogen</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Application by waste</span>}
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="/agriculturalWaste" onClick={(e) => handleLinkClick(e, '/agriculturalWaste')}>Agricultural Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fuelWaste" onClick={(e) => handleLinkClick(e, '/fuelWaste')}>Fuel Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/plastic" onClick={(e) => handleLinkClick(e, '/plastic')}>Plastic Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/municipalWaste" onClick={(e) => handleLinkClick(e, '/municipalWaste')}>Municipal Solid Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rubberWaste" onClick={(e) => handleLinkClick(e, '/rubberWaste')}>Rubber Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bioHazardWaste" onClick={(e) => handleLinkClick(e, '/bioHazardWaste')}>Bio Hazard Waste</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Industrial Application</span>}
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="/agriculture" onClick={(e) => handleLinkClick(e, '/agriculture')}>Agriculture and Food industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/petro" onClick={(e) => handleLinkClick(e, '/petro')}>PetroChemical Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fmcg" onClick={(e) => handleLinkClick(e, '/fmcg')}>Plastic Product & FMCG Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/waste" onClick={(e) => handleLinkClick(e, '/waste')}>Waste Management Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rubber" onClick={(e) => handleLinkClick(e, '/rubber')}>Rubber Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transport" onClick={(e) => handleLinkClick(e, '/transport')}>Transport & Logistics Decarbonization </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-white" onClick={handleShow}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
};

export default MyNavbar;
