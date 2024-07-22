import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Sidebar = ({ sidebar, handleSidebar }) => {
  const sidebarRef = useRef();

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleSidebar();
      }
    }
    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, handleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed hidden sm:flex top-0 right-0 w-[240px]  md:w-[600.95px] h-full bg-[#ffffff] text-black text-bold transform ${sidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="  flex flex-col p-2 md:p-4 w-full h-full">
        <div className="flex justify-end items-center mt-1 md:mb-6 me-1 sm:me-10">
          <button onClick={handleSidebar} className="mt-2 me-1 text-xl md:text-2xl">
            <GrClose className="size-18" />
          </button>
        </div>
        <nav className="side flex gap-2 flex-col items-start my-10 sm:my-5 text-2xl space-y-2 md:space-y-4 ps-10 text-orange-300">
          <Link
            to="/"
            className="flex justify-between items-center text-lg md:text-xl no-underline py-1 md:px-12 md:py-4 md:m-4 ps-1 hover:text-gray-600"
            onClick={handleSidebar}
          >
            <span className="flex-1 text-center text-3xl sm:text-5xl sm:mx-10 hover:mx-1 drop-shadow-2xl">Home</span>
          </Link>
          <Link
            to="/AboutUs"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4 hover:text-gray-600"
            onClick={handleSidebar}
          >
            <span className="flex-1 text-center text-3xl sm:text-5xl sm:mx-10 hover:mx-1">About</span>
          </Link>
          <Link
            to="/ServicePage"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4 hover:text-gray-600"
            onClick={handleSidebar}
          >
            <span className="flex-1 text-center text-3xl sm:text-5xl sm:mx-10 hover:mx-1">Services</span>
          </Link>
          <Link
            to="/liveProject"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4 hover:text-gray-600"
            onClick={handleSidebar}
          >
            <span className="flex-1 text-center text-3xl sm:text-5xl sm:mx-10 hover:mx-1">Projects</span>
          </Link>
          <Link
            to="/ContactUs"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4 hover:text-gray-600"
            onClick={handleSidebar}
          >
            <span className="flex-1 text-center text-3xl sm:text-5xl sm:mx-10 hover:mx-1">Contact</span>
          </Link>
         
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
