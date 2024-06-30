import React from "react";

function Creations() {
  return (
    <>
      <div className=" h-10"></div>
      <div
        class="  text-white  relative w-full  h-40 -mb-32 hidden md:block"
        style={{
          backgroundImage: "url('/images/up.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className=" flex md:flex-row sm:flex-col m-2  z-10">
        <div class="relative  w-full max-w-[20rem] flex-col border-[25px] border-yellow-500   p-8 text-white  md:mx-20 hidden sm:block ">
          <div className="h-72"></div>

          <div class="mt-12 p-0">
            <button
              class="block w-full select-none rounded-lg bg-yellow-400 sm:py-3.5 sm:px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              More out
            </button>
          </div>
        </div>
        <span className="md:flex   md:flex-row  sm:-ml-40">
          <h1 className=" sm:relative sm:text-8xl md:text-4xl  font-serif font-extrabold grid items-center md:gap-26  md:-ml-32 md:z-10 ">
            FROM CONCEPT TO CREATION
          </h1>
          <p className="relative grid items-center mx-auto max-w-xl md:mt-40 lg:mr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus vero qui omnis eveniet dolor fugit dolore quidem
            corporis ea. Animi exercitationem doloremque veritatis rerum?
          </p>
        </span>
      </div>

      <div
        class="  p-12 text-white  pb-48 relative w-full hidden md:block"
        style={{
          backgroundImage: "url('/images/down.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
}

export default Creations;
