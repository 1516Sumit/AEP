import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageblog from "../blogimg/image.png";
import { Link } from 'react-router-dom';

function Blogspage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ width: "90vw", marginLeft: "5vw" }}>
      <h4 className="mx-4 my-12">Latest Post</h4>
      <div className="row mx-2 md:mx-4 my-4 gap-10 sm:gap-0">
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row mx-2 md:mx-4 my-4 gap-10 sm:gap-0">
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row mx-2 md:mx-4 my-4 gap-10 sm:gap-0">
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-sm-4" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          <Link className="card text-decoration-none">
            <img
              className="card-img-top"
              src={imageblog}
              alt="Card cap"
            />
            <div className="card-body">
              <span className="techno">Technology</span>
              <h5 className="card-title">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogspage;
