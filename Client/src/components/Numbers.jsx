import React from "react";

function Numbers() {
  return (
    <div>
      <div className="w-full h-auto flex md:justify-center md:items-center">
        <div className="flex justify-center items-center w-[1050px] h-auto">
          <div className="flex flex-col md:flex-row items-left md:justify-around  text-xl font-bold py-20 mb-8 md:gap-32">
            <div className="flex py-4">
              <div className="text-4xl pr-2">160</div>
              <div>
                <div className="text-[#fddaa6] text-sm ">SQUARE</div>
                <div className="text-[#222322] text-sm ">COMPLEX</div>
              </div>
            </div>
            <div className="flex py-4 ">
              <div className="text-4xl pr-2">180</div>
              <div>
                <div className="text-[#fddaa6] text-sm">HAPPY</div>
                <div className="text-[#222322] text-sm">CLIENTS</div>
              </div>
            </div>
            <div className="flex py-4">
              <div className="text-4xl pr-2">100</div>
              <div>
                <div className="text-[#fddaa6] text-sm">COMPLETED</div>
                <div className="text-[#222322] text-sm">PROJECTS</div>
              </div>
            </div>
            <div className="flex py-4">
              <div className="text-4xl pr-2">198</div>
              <div>
                <div className="text-[#fddaa6] text-sm">TEAM</div>
                <div className="text-[#222322] text-sm">MEMEBERS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
