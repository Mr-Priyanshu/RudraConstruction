import React from "react";
import Image5 from "/images/image7.png";

function OurTeam() {
  return (
    <div>
      <div className=" w-full h-auto flex flex-col justify-center items-center">
        <div className="md:w-[1050px] h-auto">
          <h2 className="text-center text-3xl font-bold mb-8 text-[#FFBA66]">
            Our Team
          </h2>

          <div className="md:grid grid-cols-5 text-center">
            <div className="py-8 md:py-0">
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <img src={Image5} alt="Image5" />
              </div>
              <h1 className="text-[#FFD49F] font-bold">Ashok Sharma</h1>
              <p className="text-xs  text-[#A2A2A2]">
                Interior Head, from Rajasthan with 15 years of experience.
              </p>
            </div>
            <div className="py-8 md:py-0">
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <img src={Image5} alt="Image5" />
              </div>
              <h1 className="text-[#A2A2A2] font-bold">Name</h1>
              <p className="text-xs text-[#A2A2A2] font-bold">Description</p>
            </div>
            <div className="py-8 md:py-0">
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <img src={Image5} alt="Image5" />
              </div>
              <h1 className="text-[#A2A2A2] font-bold">Name</h1>
              <p className="text-xs text-[#A2A2A2] font-bold">Description</p>
            </div>
            <div className="py-8 md:py-0">
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <img src={Image5} alt="Image5" />
              </div>
              <h1 className="text-[#A2A2A2] font-bold">Name</h1>
              <p className="text-xs text-[#A2A2A2] font-bold">Description</p>
            </div>
            <div>
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <img src={Image5} alt="Image5" />
              </div>
              <h1 className="text-[#A2A2A2] font-bold">Name</h1>
              <p className="text-xs text-[#A2A2A2] font-bold">Description</p>
            </div>
          </div>

          <p className="text-center text-sm mt-8 text-[#A2A2A2]">
            Meet our passionate team, dedicated to revolutionizing Construction
            with innovative and engaging solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
