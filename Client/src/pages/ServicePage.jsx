import React from "react";
import ServHero from "../components/Service-page/ServHero";
import Best from "../components/Service-page/Best";
import ServCards from "../components/Service-page/ServCards";
import ServContact from "../components/Service-page/ServContact";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <>
      <ServHero />
      <Best />
      <ServCards />
      <ServContact />

      <Footer />
    </>
  );
};

export default ServicePage;
