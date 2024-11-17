import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import facebookLogo from "../icons/image.png";
import linkedinLogo from "../icons/image copy.png";
import instagram from "../icons/instagram.png";
import youtubeLogo from "../icons/image copy 3.png";
import email from "../icons/image copy 4.png";
import caller from "../icons/image copy 5.png";

function Topper() {
  return (
    <>
      <div id="topper" className="relative" style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
        }}>
        <div className="flex flex-row items-center justify-center" id="logo" style={{margin:"1%"}}>
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
        <div className="flex flex-row items-center justify-center" id="contact" style={{marginRight:"2%"}}>
          <Link target='_blank' to="mailto:info@aeptech.eco">
            <img id="email-logo" src={email} alt="email"></img>
          </Link>
          <Link className="text-decoration-none text-white" target='_blank' to="mailto:info@aeptech.eco">
            <span className="mx-2" id="email-span">info@aeptech.eco</span>
          </Link>
          <Link target='_blank' to="tel:+61451488808">
            <img id="call-logo" src={caller} alt="caller"></img>
          </Link>
          <Link className="text-decoration-none text-white" target='_blank' to="tel:+61451488808">
            <span className="mx-2" id="call-span">+61451488808</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topper;
