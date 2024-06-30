import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import MoreAbout from "./components/MoreAbout";
import Services from "./components/Services";
import Creation from "./components/Creation";
import Creations from "./components/Creations";
import ContactUs from "./pages/ContactUs";
import ConHero from "./components/Contact-page/ConHero";
import Get from "./components/Contact-page/Get";
import Map from "./components/Contact-page/Map";
import ServicePage from "./pages/ServicePage";
import ServHero from "./components/Service-page/ServHero";
import Best from "./components/Service-page/Best";
import ServCards from "./components/Service-page/ServCards";
import ServContact from "./components/Service-page/ServContact";
import SingleServices from "./pages/SingleServices";
import Interior from "./components/Single-Service/Interior-page/Interior";
import IntHero from "./components/Single-Service/Interior-page/IntHero";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body1 from "./components/Body1";
import ImageStack from "./components/ImageStack";
import Card from "./components/Card";
import OngoingProject from "./components/OngoingProject";
import Showcasecards from "./components/Showcasecards";
import Numbers from "./components/Numbers";
import OurTeam from "./components/OurTeam";
import AboutUs from "./components/About";
import WorkQuality from "./pages/WorkQuality";
import LiveOngoingProjects from "./pages/LiveOngoingProjects";
import SingleProject from "./pages/SingleProject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />

            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Body1" element={<Body1 />} />
            <Route path="/ImageStack" element={<ImageStack />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/OngoingProject" element={<OngoingProject />} />
            <Route path="/Showcasecards" element={<Showcasecards />} />
            <Route path="/Numbers" element={<Numbers />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/MoreAbout" element={<MoreAbout />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Creation" element={<Creation />} />
            <Route path="/Creations" element={<Creations />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ConHero" element={<ConHero />} />
            <Route path="/Get" element={<Get />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/ServHero" element={<ServHero />} />
            <Route path="/Best" element={<Best />} />
            <Route path="/ServCards" element={<ServCards />} />
            <Route path="/ServContact" element={<ServContact />} />
            <Route path="/SingleServices" element={<SingleServices />} />
            <Route path="/Interior" element={<Interior />} />
            <Route path="/IntHero" element={<IntHero />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/workquality" element={<WorkQuality/>}/>
            <Route path="/liveProject" element={<LiveOngoingProjects/>}/>
            <Route path="/singleproject/:id" element={<SingleProject/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
