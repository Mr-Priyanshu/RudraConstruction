import { Link } from "react-router-dom";

function Creations() {
  return (
    <>
      <div className="h-28"></div>
      <div className="text-white relative w-full h-40 -mb-32 hidden md:block"></div>

      <div className="flex flex-col sm:flex-col md:flex-row m-2 z-10">
        <div className="relative w-full max-w-[20rem] flex-col border-[25px] border-[#fddaa6] p-8 text-white md:mx-20 sm:block md:block">
          <div className="h-68 sm:h-72">
          <h1 className="text-4xl sm:text-8xl flex md:w-[30rem] pt-10 sm:pt-24  md:text-6xl text-gray-700  font-medium ">
                FROM CONCEPT TO CREATION
              </h1>
          </div>

          <Link to="/Machine-Information">
            <div className="mt-12 p-0">
              <button
                className="block w-full select-none rounded-lg bg-[#515150] py-3.5 px-7 text-center align-middle  uppercase text-[#ffffff] shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                style={{
                  backgroundImage: "url('/images/jcb.webp')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                More out
              </button>
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row sm:ml-0 md:-ml-32">
          <div className="text-center md:text-left md:mt-0 sm:mt-10 sm:mb-10 md:mb-0">
            <div className=" p-4 ">
             
            </div>
          </div>
          <div className="sm:ps-28 sm:ms-28">
            
          <p className="relative grid items-center px-5   mx-auto max-w-xl md:mt-40 lg:mr-20 sm:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            repellendus vero qui omnis eveniet dolor fugit dolore quidem
            corporis ea. Animi exercitationem doloremque veritatis rerum?sum dolor sit amet consectetur adipisicing elit. Id,
            repellendus vero qui omnis eveniet dolor fugit dolore quidem
            corporis ea. Animi exercitationem doloremque veritatis rerum?sum dolor sit amet consectetur adipisicing elit. Id,
            repellendus vero qui omnis eveniet dolor fugit dolore quidem
            corporis ea. Animi exercitationem doloremque veritatis rerum?
          </p>
          </div>
        </div>
      </div>

      <div
        className="p-12 text-white pb-48 relative w-full sm:block md:block"
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
