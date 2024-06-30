import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = ({ sidebar, handleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[240px] md:w-[600.95px] h-full bg-[#D9D9D9B2] text-black transform ${
        sidebar ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="flex flex-col p-2 md:p-4 w-full h-full">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <button onClick={handleSidebar} className="text-xl md:text-2xl">
            ✖
          </button>
        </div>
        <nav className="side flex flex-col space-y-2 md:space-y-4">
          <a
            href="#home"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">Home</span>
            <FaChevronRight className="text-xl md:text-2xl" />
          </a>
          <a
            href="#about"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              About
            </span>
            <FaChevronRight className="text-xl md:text-2xl" />
          </a>
          <a
            href="#services"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Services
            </span>
          </a>
          <a
            href="#projects"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Our Projects
            </span>
          </a>
          <a
            href="#blogs"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Blogs
            </span>
          </a>
          <a
            href="#contact"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Contact
            </span>
          </a>
          <a
            href="#terms"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Terms & Conditions
            </span>
          </a>
          <a
            href="#privacy"
            className="flex justify-between items-center text-lg md:text-xl no-underline px-2 py-1 md:px-12 md:py-4 md:m-4"
          >
            <span className="flex-1 text-center text-xl md:text-3xl">
              Privacy
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
