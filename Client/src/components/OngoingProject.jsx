import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OngoingProject = () => {
  const cardData = [
    {
      image: "/images/cardimg.png",
      category: "Apartments",
      title: "Hari Om Builders",
      location: "Vijay Nagar",
      description:"Modern amenities and a prime location make this apartment a dream home."
     
    },
    {
      image: "/images/cardimg.png",
      category: "Apartments",
      title: "Kalki Apartment",
      location: "Vijay Nagar",
      description:
        "Modern amenities and a prime location make this apartment a dream home.",
    },
    {
      image: "/images/cardimg.png",

      category: "Apartments",
      title: "Another Project",
      location: "Vijay Nagar",
      description:
        "Modern amenities and a prime location make this apartment a dream home.",
    },
    {
      image: "/images/cardimg.png",

      category: "Apartments",
      title: "Another Project",
      location: "Vijay Nagar",
      description:
        "Modern amenities and a prime location make this apartment a dream home.",
    },
    {
      image: "/images/cardimg.png",

      category: "Apartments",
      title: "Another Project",
      location: "Vijay Nagar",
      description:
        "Modern amenities and a prime location make this apartment a dream home.",
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  p-42 mt-11">
      <div className="mb-4 mr-9 flex text-left ">
        <h1 className=" sm:text-6xl text-[#222322] text-3xl font-semibold  p-3 text-left">
          Ongoing Projects
        </h1>
        <h1 className=" sm:text-6xl text-2xl font-bold text-[#A2A2A2F2]  p-3 text-left">
          
        </h1>
      </div>
      <div className="w-8/12  m-auto mt-5  ">
      <Slider {...settings} className="flex justify-center" >
        {cardData.map((card, index) => (
           <div key={index} className="p-2 flex justify-center">
           <Card {...card} />
         </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default OngoingProject;
