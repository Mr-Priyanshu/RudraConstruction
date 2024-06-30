import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

function Contact() {
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
            <h1 className="text-6xl font-serif font-semibold mb-4">Contact Us</h1>
            <p className="text-2xl font-semibold">
              You can contact us whenever you need help or just curoius about
              something.
            </p>
          </div>
          <div className="text-center bg-white shadow-lg w-[90%] rounded-xl -mt-32 z-10 p-2 flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row gap-6 p-4 w-full">
              
              <iframe
                id="map"
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1801169036357!2d79.92041467536185!3d23.163625379075224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b116195eee4f%3A0x62196cfaef1c23c7!2sDOAGuru%20InfoSystems%20-%20Best%20Digital%20Marketing%20Company%20in%20Jabalpur%20%7C%20Best%20Software%20company%20in%20Jabalpur%20%7C%20IT%20Company%20in%20Jabalpur!5e0!3m2!1sen!2sin!4v1719481460344!5m2!1sen!2sin"
                className="md:w-[40%] rounded-2xl "
                allowFullScreen=""
                loading="lazy"
              />

              <div className="my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white  rounded-md text-[#333] font-[sans-serif]">
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

                  <div>
                    <h1 className="text-xl font-extrabold">Address</h1>
                    <p className="text-sm text-gray-400 mt-1">
                      Wright Town, Jabalpur
                    </p>
                    <p className="text-sm text-gray-400 mt-1">482002</p>
                    <div className="mt-12">
                      <h2 className="text-lg font-extrabold">Email</h2>
                      <a
                        target="blank"
                        href="vinay@gmail.com"
                        className="text-[#007bff] text-sm ml-3"
                      >
                        <strong>Vinay@gmail.com</strong>
                      </a>
                    </div>
                    <div className="mt-12">
                      <h2 className="text-lg font-extrabold">Socials</h2>
                      <div className="flex justify-center text-2xl gap-8 mt-2">
                        <MdEmail className="hover:bg-yellow-600 hover:text-white" />
                        <FaFacebookSquare className="hover:bg-yellow-600 hover:text-white" />
                        <FaSquareThreads className="hover:bg-yellow-600 hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
