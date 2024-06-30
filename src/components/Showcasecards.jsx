import React from "react";
import cardImageOne from "/images/wing.png";
import cardImageTwo from "/images/carbon.png";
import cardImageThree from "/images/archi.png";

function Showcasecards() {
  return (
    <div>
      <div className="mt-[180px] md:mt-[113px] w-full pt-3 pb-3 md:h-[350px] bg-[#fcdba6] md:grid grid-cols-3 ">
        <div className="bg-white col-span-1  m-20  md:pt-5 md:mt-20 md:mb-20 md:ml-40 md:mr-0 rounded-[10px]">
          <img
            className="w-[80px] h-auto px-5 py-2"
            src={cardImageOne}
            alt="cardimageone"
          />
          <h1 className="cardhead font-bold px-5 py-2">DESIGN & PLANNING</h1>
          <p className="cardhead text-[gray] text-[10px] px-5 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            sequi!{" "}
          </p>
        </div>
        <div className="bg-white col-span-1 m-20 md:pt-5 rounded-[10px]">
          <img
            className="w-[80px] h-auto px-5 py-2"
            src={cardImageTwo}
            alt="cardimagetwo"
          />
          <h1 className="cardhead font-bold px-5 py-2">CUSTOM SOLUTION </h1>
          <p className="cardhead text-[gray] text-[10px] px-5 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            sequi!{" "}
          </p>
        </div>
        <div className="bg-white col-span-1 m-20 md:pt-5  md:mt-20 md:mb-20 md:mr-40 md:ml-0 rounded-[10px]">
          <img
            className="w-[80px] h-auto px-5 py-2"
            src={cardImageThree}
            alt="cardimagethree"
          />
          <h1 className="cardhead font-bold px-4 md:px-5 py-2">
            ARCHITECTURE DESIGN
          </h1>
          <p className="cardhead text-[gray] text-[10px] px-4 md:px-5 py-2 font-'Gemunu Libre">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            sequi!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Showcasecards;
