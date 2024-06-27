import React, { useState } from "react";
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

  return (
    <>
      <Navbar id="navi" expand="lg" bg="transparent" variant="light">
        <Navbar.Brand as={Link} to="/">
          <img id="aep" className="bg-transparent" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end text-white">
          <Nav>
            <Nav.Link className="font-poppins text-white" as={Link} to="about">
              About
            </Nav.Link>
            <NavDropdown className="text-white" title={<span className="text-white">Services</span>} id="navbarDropdownMenuLink">
              <NavDropdown.Item as={Link} to="#">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Application by waste</span>}
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="agriculturalWaste">Agricultural Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="fuelWaste">Fuel Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="plastic">Plastic Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="municipalWaste">Municipal Solid Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="rubberWaste">Rubber Waste</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="bioHazardWaste">Bio Hazard Waste</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white">Industrial Application</span>}
              id="navbarDropdownMenuLink"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="agriculture">Agriculture and Food industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="petro">PetroChemical Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="fmcg">Plastic Product & FMCG Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="waste">Waste Management Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="rubber">Rubber Industry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="transport">Transport & Logistics Decarbonization </NavDropdown.Item>
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
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {["checkbox", "radio"].map((type) => (
                  <div key={`inline-${type}`} className="flex flex-row justify-evenly items-center mb-3">
                    <Form.Label>Select Subjects: </Form.Label>
                    <Form.Check
                      inline
                      label="1"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
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
