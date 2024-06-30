import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

function ServContact() {
  return (
    <>
      <div className="bg-[#f3f6ff] flex justify-center items-center min-h-screen w-full mb-20">
        <div className=" ml-1 mr-1 flex flex-col justify-center items-center md:w-full sm:w-96 border-gray-700 text-center w-full ">
          <div
            className=" rounded-2xl p-12 text-white  pb-48 relative w-full "
            style={{
              backgroundImage: "url('/images/contact1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-6xl font-serif font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-2xl font-semibold">
              You can contact us whenever you need help or just curoius about
              something.
            </p>
          </div>
          <div className="text-center bg-white shadow-lg md:w-[50%] rounded-xl -mt-32 z-10 p-2 mb-5 flex flex-col lg:flex-row">
            <div className="flex flex-col  justify-center lg:flex-row gap-6 p-4 w-full">
              <div className="my-6 ">
                <div className=" items-center gap-16 p-8 mx-auto max-w-4xl bg-white  rounded-md text-[#333] font-[sans-serif]">
                  <div className="flex gap-2 justify-center font-serif font-semibold md:text-4xl text-2xl mb-5  ">
                    <h1 className=" text-yellow-600 ">REQUEST</h1>
                    <h1 className=" ">A VISIT</h1>
                  </div>
                  <form
                    action="https://fabform.io/f/xxxxx"
                    method="post"
                    className="ml-auto space-y-4"
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
                    <span className="flex gap-2 ">
                      <input
                        type="Date"
                        placeholder="date"
                        className="w-full rounded-md py-2.5 px-4 border  text-sm outline-[#007bff]"
                      />
                      <input
                        type="time"
                        placeholder="time"
                        className="w-full rounded-md py-2.5 px-4 border  text-sm outline-[#007bff]"
                      />
                    </span>
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
                      className="text-white bg-[#ebd04b] hover:bg-orange-600 font-semibold rounded-md text-md px-4 py-2 w-full"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServContact;
