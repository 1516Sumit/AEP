import "./App.css";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Blogspage from "./components/Blogspage.jsx";
import Petro from "./components/industrial/Petro.jsx";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Agriculture from "./components/industrial/Agriculture.jsx";
import Fmcg from "./components/industrial/Fmcg.jsx";
import Waste from "./components/industrial/Waste.jsx";
import Rubber from "./components/industrial/Rubber.jsx";
import Transport from "./components/industrial/Transport.jsx";
import AgriculturalWaste from "./components/applicationwaste/AgriculturalWaste.jsx";
import BioHazardWaste from "./components/applicationwaste/BioHazardWaste.jsx";
import FuelWaste from "./components/applicationwaste/FuelWaste.jsx";
import MunicipalWaste from "./components/applicationwaste/MunicipalWaste.jsx";
import Plastic from "./components/applicationwaste/Plastic.jsx";
import RubberWaste from "./components/applicationwaste/RubberWaste.jsx";
import InnovationPyrolysis from "../src/components/technlogies/InnovationPyrolysis.jsx";
import FlowBattery from "./components/technlogies/Flowbattery.jsx";
import GasCleansing from "./components/technlogies/GasCleansing.jsx";
import MethanePyrolysis from "./components/technlogies/MethanePyrolysis.jsx";
import Pulsedryer from "./components/technlogies/Pulsedryer.jsx";
import ShockCondensation from "./components/technlogies/ShockCondensation.jsx";
import WasteWaster from "./components/technlogies/WasteWater.jsx";
import Props from "./components/Props.jsx";
import Works from "./components/Works.jsx";


import background from "./img/pexels-pixabay-221369.jpg";
import About from "./components/About.jsx";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route
            exact path="blogs"
            element={
              <>
                <Props heading="News & Blogs" sub="All Blogs Page" background={background} />
                <Blogspage />
                <Footer />
              </>
            }
          />
          <Route exact path="agriculture" element={<Agriculture />} />
          <Route exact path="petro" element={<Petro />} />
          <Route exact path="fmcg" element={<Fmcg />} />
          <Route exact path="waste" element={<Waste />} />
          <Route exact path="rubber" element={<Rubber />} />
          <Route exact path="transport" element={<Transport />} />
          <Route exact path="agriculturalWaste" element={<AgriculturalWaste />} />
          <Route exact path="bioHazardWaste" element={<BioHazardWaste />} />
          <Route exact path="fuelWaste" element={<FuelWaste />} />
          <Route exact path="municipalWaste" element={<MunicipalWaste />} />
          <Route exact path="plastic" element={<Plastic />} />
          <Route exact path="rubberWaste" element={<RubberWaste />} />
          <Route
            exact path="OurInnovationInPyrolysis"
            element={<InnovationPyrolysis />}
          />
          <Route exact path="PulseDryer" element={<Pulsedryer />} />
          <Route exact path="ShockCondensation" element={<ShockCondensation />} />
          <Route exact path="GasCleansing" element={<GasCleansing />} />
          <Route exact path="WasteWaterReacycling" element={<WasteWaster />} />
          <Route exact path="FlowBattery" element={<FlowBattery />} />
          <Route exact path="PyrolysisofMethane" element={<MethanePyrolysis />} />

          <Route exact path="Works" element={<Works />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
