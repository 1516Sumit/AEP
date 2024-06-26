// import logo from "./logo.svg";
import "./App.css";
// import Nav from "./components/Nav.jsx";

// import Topper from "./components/Topper.jsx";
import Home from "./components/Home.jsx";

// import Second from "./components/Second.jsx";
// import Long from "./components/Long.jsx";
// import Industrialapplication from "./components/Industrialapplication.jsx";
// import Wasteapplication from "./components/Wasteapplication.jsx";
// import Founder from "./components/Founder.jsx";
import Footer from "./components/Footer.jsx";
// import Blogs from "./components/Blogs.jsx";
// import blogspage from "./components/Blogspage.jsx";
import Blogspage from "./components/Blogspage.jsx";
// import ApplicationByWaste from "./components/ApplicationByWaste.jsx";
// import OurTechnologies from "./components/OurTechnologies.jsx";
import Petro from "./components/industrial/Petro.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Agriculture from "./components/industrial/Agriculture.jsx";
import Fmcg from "./components/industrial/Fmcg.jsx";
import Waste from "./components/industrial/Waste.jsx";
import Rubber from "./components/industrial/Rubber.jsx";
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route
          path="blogs"
          element={
            <>
              <Props heading="News & Blogs" sub="All Blogs Page" />
              <Blogspage />
              <Footer/>
            </>
          }
        />
        <Route path="agriculture" element={<Agriculture />} />
        <Route path="petro" element={<Petro />} />
        <Route path="fmcg" element={<Fmcg />} />
        <Route path="waste" element={<Waste />} />
        <Route path="rubber" element={<Rubber />} />
        <Route path="agriculturalWaste" element={<AgriculturalWaste />} />
        <Route path="bioHazardWaste" element={<BioHazardWaste />} />
        <Route path="fuelWaste" element={<FuelWaste />} />
        <Route path="municipalWaste" element={<MunicipalWaste />} />
        <Route path="plastic" element={<Plastic />} />
        <Route path="rubberWaste" element={<RubberWaste />} />
        <Route
          path="OurInnovationInPyrolysis"
          element={<InnovationPyrolysis />}
        />
        <Route path="PulseDryer" element={<Pulsedryer />} />
        <Route path="ShockCondensation" element={<ShockCondensation />} />
        <Route path="GasCleansing" element={<GasCleansing />} />
        <Route path="WasteWaterReacycling" element={<WasteWaster />} />
        <Route path="FlowBattery" element={<FlowBattery />} />
        <Route path="PyrolysisofMethane" element={<MethanePyrolysis />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
