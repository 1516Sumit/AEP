import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };
  return (
    <div className="h-auto md:h-[50vh] bg-black p-5 m-0 w-full flex flex-col justify-around gap-10"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
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
      <div className="flex justify-around flex-col md:flex-row items-start gap-10 md:gap-0 md:items-center text-white">
        <div className="flex flex-col">
          <h6 className="mb-2">Company</h6>
          <Link className="text-decoration-none text-white" to="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</Link>
          <Link className="text-decoration-none text-white" href="/" >Feature</Link>
          <Link className="text-decoration-none text-white" href="/" >Works</Link>
          <Link className="text-decoration-none text-white" href="/" >Career</Link>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-2">Help</h6>
          <Link className="text-decoration-none text-white" href="/" >Customer Support</Link>
          <Link className="text-decoration-none text-white" href="/" >Delivery Details</Link>
          <Link className="text-decoration-none text-white" href="/" >Terms & Conditions</Link>
          <Link className="text-decoration-none text-white" href="/" >Privacy Policy</Link>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-2">Resources</h6>
          <Link className="text-decoration-none text-white" href="/" >Free eBooks</Link>
          <Link className="text-decoration-none text-white" href="/" >Development Tutorial</Link>
          <Link className="text-decoration-none text-white" href="/" >How to - Blog</Link>
          <Link className="text-decoration-none text-white" href="/" >Youtube Playlist</Link>
        </div>
        <div className="flex flex-col">
          <h6 className="mb-2">Links</h6>
          <Link className="text-decoration-none text-white" href="/" >Free eBooks</Link>
          <Link className="text-decoration-none text-white" href="/" >Development Tutorial</Link>
          <Link className="text-decoration-none text-white" href="/" >How to - Blog</Link>
          <Link className="text-decoration-none text-white" href="/" >Youtube Playlist</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
