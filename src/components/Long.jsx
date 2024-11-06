import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Long() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div id="long" ref={ref} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <span className="big-text">
            {inView ? <CountUp duration={5} end={4} /> : '0'}k
          </span>
          <br />
          <span className="small-text">Project Done</span>
        </div>
        <div style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <span className="big-text">
            {inView ? <CountUp duration={5} end={98} /> : '0'}%
          </span>
          <br />
          <span className="small-text">Happy Clients</span>
        </div>
        <div style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <span className="big-text">
            {inView ? <CountUp duration={5} end={185} /> : '0'}+
          </span>
          <br />
          <span className="small-text">Project Done</span>
        </div>
        <div style={{ textAlign: "center", color: "white" }} data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <span className="big-text">
            {inView ? <CountUp duration={5} end={23} /> : '0'}+
          </span>
          <br />
          <span className="small-text">Professional Worker</span>
        </div>
      </div>
    </>
  );
}

export default Long;
