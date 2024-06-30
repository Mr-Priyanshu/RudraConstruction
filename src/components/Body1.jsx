import React from "react";
import backimg from "/images/herosection.png";

const Body1 = () => {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      <img
        src={backimg}
        alt="Background"
        className="w-full h-[400px] md:h-[981px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:pl-40 md:pt-24">
        <h1 className="text-[#FFC885] text-3xl md:text-[100px] font-goldman font-semibold leading-tight md:leading-[140px] tracking-[-0.02em]">
          LET YOUR HOME BE
        </h1>
        <h1 className="text-[#A2A2A2F2] text-3xl md:text-[100px] font-georama font-bold leading-tight md:leading-[140px] tracking-[0.05em]">
          UNIQUE AND
        </h1>
        <h1 className="text-[#A2A2A2F2] text-3xl md:text-[100px] font-georama font-bold leading-tight md:leading-[140px] tracking-[0.05em]">
          STYLISH
        </h1>
      </div>
    </div>
  );
};

export default Body1;
