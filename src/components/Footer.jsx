import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Rudra Construction
                </span>
              </a>
              <div className="p-12 text-white ">
                <h2 className="text-lg font-bold">Address:</h2>
                <p>Wright Town, Jabalpur</p>
                <p>482001</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-12">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/SingleServices" className="hover:underline">
                      Interior
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/ServicePage" className="hover:underline">
                      Service Page
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/AboutUs" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/ContactUs" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/Privacy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/Terms" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div className="gap-2">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <span className="flex gap-2">
                      <IoMdCall className="mt-1" />

                      <a href="#" className="hover:underline">
                        +91 9198900449
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="flex gap-2">
                      <MdEmail className="mt-1" />

                      <a href="#" className="hover:underline">
                        vinay@gmail.com
                      </a>
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
              <a href="https://flowbite.com/" className="hover:underline">
                DoaGuru Infosystems
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
