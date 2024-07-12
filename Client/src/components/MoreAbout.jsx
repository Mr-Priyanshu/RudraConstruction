import { Link } from "react-router-dom";


function MoreAbout() {
  return (
    <>
      <center className="mb-24 mt-11">
        <h1 className=" text-orange-300 text-6xl p-6 font-semibold">
          Welcome
        </h1>
        <p className="  text-2xl mb-5">Crafting homes for</p>
        <h3 className="  text-2xl font-semibold mb-3">
        DISCERNING CLIENT
        </h3>
        <p className=" mb-3">SINCE 1986</p>
        <p className=" text-2xl text-gray-600 mb-3">
          The only thing more important than experience is passion
        </p>
        <p className="text-gray-600 text-2xl mb-5">We have both</p>
        <Link to='/AboutUs'>
        
        <button
        
          className="large none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-2xl font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
          data-ripple-light="true"
        >
          More about us
        </button>
        </Link>
      </center>
    </>
  );
}

export default MoreAbout;
