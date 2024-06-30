import React from "react";
import Image1 from "/images/ARCHITECTURE.png";
import Image2 from "/images/Exterior.png";
import Image3 from "/images/InteriorImg.png";
import Image4 from "/images/Group.png";

function Apartment() {
  return (
    <div>
      <div className=" w-full h-auto flex flex-col justify-center items-center">
        <h1 className="mt-5 mb-5 md:mt-10 md:mb-10 md:text-center md:text-2xl font-bold">
          CHOOSE AN <span className="text-[#FFBA66]">APARTMENT</span>
        </h1>
        <div className="md:w-[1050px] md:h-[600px] md:grid grid-cols-3 ">
          <div className="flex flex-col items-center w-[350px] md:pl-12 col-span-1">
            <div>
              <img className="w-[300px] h-[300px]" src={Image1} alt="Image1" />
            </div>
            <div className="bg-white w-[300px] h-[250px] rounded-[10px] border border-[gray] mt-6">
              <div className="flex flex-col items-center">
                <img
                  className="w-[60px] h-auto pt-5"
                  src={Image4}
                  alt="Image4"
                />
                <h1 className="pt-2 text-sm">ARCHITECTURE</h1>
                <p className="text-[8px] text-[gray] py-3">SOME MORE DETAILS</p>
                <p className="text-[gray] text-[10px] text-center px-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[350px] items-center col-span-1 pt-6 md:pt-0">
            <div className=" bg-white w-[300px] h-[250px] rounded-[10px] border border-[gray] mb-6">
              <div className="flex flex-col items-center">
                <img
                  className="w-[60px] h-auto pt-5"
                  src={Image4}
                  alt="Image4"
                />
                <h1 className="pt-2 text-sm">EXTERIOR DESIGN</h1>
                <p className="text-[8px] text-[gray] py-3">SOME MORE DETAILS</p>
                <p className="text-[gray] text-[10px] text-center px-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
            <div>
              <img className="w-[300px] h-[300px]" src={Image2} alt="Image2" />
            </div>
          </div>

          <div className="flex flex-col w-[350px] items-center md:items-left col-span-1 pt-6 md:pt-0">
            <div>
              <img className="w-[300px] h-[300px]" src={Image3} alt="Image3" />
            </div>
            <div className=" bg-white w-[300px] h-[250px] rounded-[10px] border border-[gray] mt-6">
              <div className="flex flex-col items-center">
                <img
                  className=" w-[60px] h-auto pt-5 "
                  src={Image4}
                  alt="Image4"
                />
                <h1 className="pt-2 text-sm">INTERIOR</h1>
                <p className="text-[8px] text-[gray] py-3">SOME MORE DETAILS</p>
                <p className="text-[gray] text-[10px] text-center px-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
