import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png"
import { FaAddressCard } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        className="bg-white"
        aria-labelledby="footer-heading"
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-wrap justify-center">
              <Link to="/" className="flex items-center flex flex-wrap justify-center">
                <img
                  src={Logo}
                  className="size-28 me-2"
                  alt="Rudra C Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
                  Rudra Construction
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-12">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/SingleServices" className="hover:underline">
                      Interior
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/ServicePage" className="hover:underline">
                      Service Page
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/AboutUs" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/ContactUs" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Follow us
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to={"/liveProject"}>
                      Live Projects
                    </Link>


                  </li>
                  <li>
                    <Link to={'/workquality'}>
                      Work Quality
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Legal
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/Privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Terms" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="gap-2">
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Contact Us
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <span className="flex gap-2">
                      <IoMdCall className="mt-1" />

                      <Link to="#" className="hover:underline">
                        +91 9198500000
                      </Link>
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="flex gap-2">
                      <MdEmail className="mt-1" />

                      <Link to="#" className="hover:underline">
                        demo@gmail.com
                      </Link>
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="flex gap-2">
                      <FaAddressCard className="mt-1" />
                      <Link>
                        Wright Town, Jabalpur 482001
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to="https://doaguru.com/" className="hover:underline">
                DoaGuru Infosystems
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
