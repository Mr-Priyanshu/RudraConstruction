


function Testimonials() {
  return (
    <>
      <div className="testimonials">
      <div className=" flex mt-14   justify-center">
        <h1 className=" text-4xl mt-5 mb-10">
          Testimonials
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center lg:gap-40 gap-10 lg:mt-20 mt-10 mb-20 px-4  ">
        
        <div className="max-h-screen relative bg-white shadow-lg w-full lg:w-96 h-64   flex items-center flex-col  rounded-2xl">
          <div className="absolute -top-10">
            <img
              className=" h-24 w-24 rounded-full object-cover "
              src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
              alt="User Image"
              />
          </div>
          <div className="mt-16 flex items-center flex-col justify-center">
            <h1 className="font-bold text-2xl mt-2">Dzidzor Boateng</h1>
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
    </>
  );
}

export default Testimonials;
