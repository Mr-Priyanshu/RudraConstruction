import React from "react";

function Services() {
  return (
    <>
      <center className="mt-10">
        <h1
          className="text-3xl text-[#FFBA66] font-bold
        "
        >
          SERVICES
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          aspernatur modi voluptatibus similique nulla? Excepturi sapiente in
          similique saepe omnis.
        </p>
      </center>

      <div className="relative max-w-2xl mx-auto mt-20 align-center md:max-w-2xl ">
        <div className="w-full h-[380px]   absolute  -top-8 md:-left-80 lg:mx-20 sm:mx-0 md:mx-10 lg:pl-10">
          <img
            className="w-full h-[380px]  object-cover relative "
            src="/images/service1.png"
            alt
          />
        </div>
        <div className="relative md:left-20 md:px-25 mb-20 px-8  ">
          <div className="md:w-[600px]  w-full h-[300px] object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px] bg-white md:px-20  px-10 pt-7  shadow-lg">
            <h1 className="md:text-2xl font-serif text-gray-600 font-semibold">
              DESIGN-BUILD
            </h1>
            <h3 className="md:text-xl font-serif text-gray-600 mt-2">
              BENCHMARK DESIGN STUDIO
            </h3>
            <p className="lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              laboriosam, cum cumque repudiandae doloribus blanditiis nam
              veritatis atque qui delectus debitis possimus soluta laborum nemo
            </p>
            <button
              className="large none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-2xl font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5 "
              data-ripple-light="true"
            >
              Services
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Services;
