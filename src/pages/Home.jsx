import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import MoreAbout from "../components/MoreAbout";
import Services from "../components/Services";
import Creation from "../components/Creation";
import Creations from "../components/Creations";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Body1 from "../components/Body1";
import ImageStack from "../components/ImageStack";
import Card from "../components/Card";
import OngoingProject from "../components/OngoingProject";
import Showcasecards from "../components/Showcasecards";
import Apartment from "../components/Apartment";
import Numbers from "../components/Numbers";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Body1 />
      <ImageStack />
      <Showcasecards />
      <OngoingProject />
      <Apartment />
      <Numbers />
      <OurTeam />
      <Services />
      {/* <Creation /> */}
      <Creations />
      <MoreAbout />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
