import React from "react";
import Card from "./Card";

const OngoingProject = () => {
  const cardData = [
    {
      image: "/images/cardimg.png",
      category: "Apartments",
      title: "Hari Om Builders",
      location: "Vijay Nagar",
      description:"Modern amenities and a prime location make this apartment a dream home. Experience luxury living with our elegantly designed apartment."
     
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
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  p-42 mt-11">
      <div className="mb-4 mr-9 flex text-left ">
        <h1 className=" sm:text-6xl text-[#FFC885] text-2xl font-bold  p-3 text-left">
          Ongoing
        </h1>
        <h1 className=" sm:text-6xl text-2xl font-bold text-[#A2A2A2F2]  p-3 text-left">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap m-auto mt-5 justify-center gap-4 md:gap-8 p-4 ">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OngoingProject;
