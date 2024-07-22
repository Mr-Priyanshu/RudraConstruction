
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import MoreAbout from "../components/MoreAbout";
import Services from "../components/Services";
import Creations from "../components/Creations";
import Body1 from "../components/Body1";
import ImageStack from "../components/ImageStack";
import OngoingProject from "../components/OngoingProject";
import Showcasecards from "../components/Showcasecards";
import Apartment from "../components/Apartment";
import Numbers from "../components/Numbers";
import OurTeam from "../components/OurTeam";

const Home = () => {
  return (
    <>
      
      <Body1 />
      <ImageStack />
      <Showcasecards />
      <OngoingProject />
      <Apartment />
      <Numbers />
      <OurTeam />
      <Services />
      <Creations />
      <MoreAbout />
      <Testimonials />
      <Contact />
      
    </>
  );
};

export default Home;
