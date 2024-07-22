
import ServHero from "../components/Service-page/ServHero";
import Best from "../components/Service-page/Best";
import ServCards from "../components/Service-page/ServCards";
import ServContact from "../components/Service-page/ServContact";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (

    <>
    <div className="pt-11">

      <ServHero />
      <Best />
      <ServCards />
      <ServContact />
    </div>

     
    </>
  );
};

export default ServicePage;
