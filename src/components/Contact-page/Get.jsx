import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

function Get() {
  return (
    <>
      <div className="p-4">
        <div className="my-6">
          <div className="grid sm:grid-cols-2 items-center gap-8 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-md text-[#333] font-[sans-serif]">
            <div className="">
              <div className="flex  text-2xl font-serif font-semibold mb-4 justify-center">
                <h1 className="px-2 text-yellow-600">GET</h1>
                <p>IN TOUCH</p>
              </div>

              <form
                action="https://fabform.io/f/xxxxx"
                method="post"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  name="message"
                  className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-yellow-400 hover:bg-yellow-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="md:mb-20 text-center">
              <div className="flex font-serif font-semibold mb-4 justify-center text-2xl">
                <h1 className="px-2 text-yellow-600">CONTACT</h1>
                <p>INFO</p>
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-extrabold">Address</h1>
                <p className="text-sm text-gray-400 mt-1">
                  Wright Town, Jabalpur
                </p>
                <p className="text-sm text-gray-400 mt-1">482002</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-extrabold">Phone:</h2>
                <a
                  target="_blank"
                  href="tel:+919874632147"
                  className="text-[#007bff] text-sm ml-3"
                >
                  <strong>+91 9874632147</strong>
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-extrabold">Email</h2>
                <a
                  target="_blank"
                  href="mailto:vinay@gmail.com"
                  className="text-[#007bff] text-sm ml-3"
                >
                  <strong>Vinay@gmail.com</strong>
                </a>
              </div>
              <div className="">
                <h2 className="text-lg font-extrabold">Socials</h2>
                <div className="flex justify-center text-2xl gap-6 mt-2">
                  <a href="mailto:vinay@gmail.com" target="_blank">
                    <MdEmail className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                  </a>
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebookSquare className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                  </a>
                  <a href="https://threads.net" target="_blank">
                    <FaSquareThreads className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Get;
