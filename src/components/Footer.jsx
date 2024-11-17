import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
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
  return (
    <>
    

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
                      <Link className="text-decoration-none text-white" to="/Works">Works</Link>
                      </li>
                      <li>
                      <Link className="text-decoration-none text-white" to="/" >Career</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/" className="text-decoration-none text-white">Resources</a>
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
