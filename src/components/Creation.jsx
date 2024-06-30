import React from "react";

function Creation() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full mb-20">
      <div className="  flex flex-col justify-center items-center md:w-full sm:w-96 border-gray-700 text-center w-full ">
        <div
          className=" rounded-2xl  text-white  relative w-full   hidden md:block"
          style={{
            backgroundImage: "url('/images/up.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-center w-[90%] rounded-xl lg:-mt-32 sm:mt-32  z-10 p-2 flex  lg:flex-row justify-start items-center ">
          <img
            src="/images/Rectangle27.png"
            className="md:w-[40%]  rounded-2xl  "
          />

          <button
            className="absolute middle none center sm:mb-10  sm:ml-36 md:h-10 md:w-30 flex justify-center rounded-lg bg-orange-500 sm:pt-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 mt-[500px]"
            data-ripple-light="true"
          >
            More Out
          </button>

          <h1 className=" sm:relative lg:text-4xl  font-serif font-extrabold grid items-center gap-16 w-[40%] h-[100px] md:-ml-32 z-10 ">
            FROM CONCEPT TO CREATION
          </h1>
          <p className="relative grid items-center mx-auto max-w-xl mt-40 lg:mr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus vero qui omnis eveniet dolor fugit dolore quidem
            corporis ea. Animi exercitationem doloremque veritatis rerum?
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Creation;
