
import TestiI from "../Assets/quote.png"

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className=" flex mt-14   justify-center">
          <h1 className=" text-6xl font-semibold mt-5 mb-10">
            Testimonials
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 lg:mt-20 mt-10 mb-20 px-4  ">

          <div className="max-h-screen relative bg-white shadow-lg  w-full lg:w-96 h-64   flex items-center flex-col  rounded-2xl">
            <div className="">

            
            <div className="absolute -top-10 left-36">
              <img
                className=" h-24 w-24 rounded-full object-cover "
                src='http://surl.li/ongkga'
                alt="User Image"
              />
            </div>
            <div>
              <img src={TestiI} alt="" className="absolute w-12 left-12" />
            </div>
            <div className="mt-16 flex items-center flex-col justify-center">
              <h1 className="font-bold text-2xl mt-2">Shree Ramanuj</h1>
              <p className="text-center mt-2 p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
                a!
              </p>
            </div>
            <div className="flex flex-row space-x-4 mt-6">
            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
