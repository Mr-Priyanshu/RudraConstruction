import React from "react";
import backgroundImage from "/images/backgroundImage.png";
import frontImage from "/images/frontImage.png";
import mapImage from "/images/mapImage.png";

const ImageStack = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-full">
        <div className="relative w-[300px] left-10 top-10 md:w-2/4 md:top-28 md:left-28">
          <div className="relative">
            <img
              className="w-[250px] md:w-[400px] h-auto"
              src={backgroundImage}
              alt="Background"
            />
          </div>
          <div className="absolute top-10 left-10 md:top-24 md:left-24">
            <img
              className="w-[250px] md:w-[400px] h-auto"
              src={frontImage}
              alt="Front"
            />
          </div>
        </div>
        <div className="relative top-[150px] md:top-28 md:w-2/4 md:flex md:flex-col md:justify-center md:items-center">
          <div className="md:w-[400px] md:ml-20">
            <h1 className="head text-left ml-6 md:text-2xl md:m-5">
              BEST ARCHITECT
            </h1>
            <h1 className="head text-left ml-6  text-[#FCDAA4] md:text-6xl md:m-5">
              A SMALL EFFICIENT <span className="text-[#F9A31B]">INTERIOR</span>
            </h1>
            <h1 className="head text-left ml-6  text-[#A2A2A2] md:text-6xl md:m-5 ">
              DESIGNING TEAM
            </h1>
            <h1 className="head text-left ml-6 md:text-2xl md:m-5 ">
              WELCOME TO RUDRA CONSTRUCTION SHOWCASE
            </h1>
            <img
              className="w-[300px] md:w-[200px] h-auto md:ml-10"
              src={mapImage}
              alt="Map"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageStack;
