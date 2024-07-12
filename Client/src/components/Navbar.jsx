import React, { useState, useEffect } from "react";
import logo from "/Logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const closeSidebarOnScroll = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeSidebarOnScroll);
    return () => {
      window.removeEventListener("scroll", closeSidebarOnScroll);
    };
  }, [sidebar]);

  return (
    <div className="bg-black p-2 md:p-1 text-white h-[60px] md:h-[100px] md:w-full shadow-lg z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={logo}
            alt="Logo"
            className=" size-10 sm:size-20 m-1 "
          />
          <div>
            <h2 className="text-sm md:text-xl font-bold">RUDRA CONSTRUCTIONS</h2>
            <h4 className="text-xs md:text-sm">BUILDERS INC.</h4>
          </div>
        </div>
        </Link>
        <div className="mr-2 md:mr-4">
          {" "}
          {/* Icon is visible on both mobile and desktop */}
          <FaBars
            onClick={handleSidebar}
            className="text-2xl md:text-4xl cursor-pointer"
          />
        </div>
      </div>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
    </div>
  );
};

export default Navbar;
