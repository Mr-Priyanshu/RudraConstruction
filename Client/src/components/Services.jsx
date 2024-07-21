
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function Services() {
  
  const [nav1, setNav1] = useState(null);
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  },[slider1]);

  return (
    <>
      <center className="mt-20">
        <h1
          className="text-4xl text-[#222322] font-semibold "
        >
          SERVICES
        </h1>
        <p className="text-gray-600 mt-5 px-5 max-w-2xl">
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
        <div className="col-lg-4 col-md-7 col-sm-9">

        
        <div className="relative md:left-20 md:px-25 mb-20 px-8  ">
          <div className="md:w-[600px]  w-full h-[300px] object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px] bg-white md:px-20  px-10 pt-7  shadow-lg">
          <Slider
          asNavFor={nav1}
          ref={(slider) => setSlider1(slider)}
          infinite={true}
          dots={true}
          arrows={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          className="content-wrapper"
        >
            <div className="service-card single-item-wrap ">
              <h1 className="md:text-2xl font-serif text-[#515150] font-semibold">
                DSIGN-BUILD
              </h1>
              <h3 className="md:text-xl font-serif text-[#515150] mt-2">
                BENCHMARK DESIGN STUDIO
              </h3>
              <p className="lg:text-lg text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
                laboriosam, cum cumque repudiandae doloribus blanditiis nam
                veritatis atque qui delectus debitis possimus soluta laborum nemo
              </p>
            </div>

            <div className="service-card single-item-wrap ">
              <h1 className="md:text-2xl font-serif text-gray-600 font-semibold">
                ARCHTECT-BUILD
              </h1>
              <h3 className="md:text-xl font-serif text-gray-600 mt-2">
                BENCHMARK DESIGN STUDIO
              </h3>
              <p className="lg:text-lg text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
                laboriosam, cum cumque repudiandae doloribus blanditiis nam
                veritatis atque qui delectus debitis possimus soluta laborum nemo
              </p>
            </div>


            </Slider>

            <Link to="/ServicePage">

              <button
                className="large none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-2xl font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5 "
                data-ripple-light="true"
              >
                Services
              </button>
            </Link>
          </div>
        </div>
      
      </div>
    </div >
      <div></div>
    </>
  );
}

export default Services;
