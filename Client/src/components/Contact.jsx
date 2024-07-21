import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import axios from "axios";

function Contact() {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData, [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("http://localhost:8080/api/rudra-constrctions/contactInfo", { ...contactData });

      console.log('line 35', res.data);
      alert("Contact Request Send")
    } catch (error) {
      console.log(error);
    }
    setContactData(
      {
    name: "",
    email: "",
    subject: "",
    message: "",
      }
    );
  }

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
                    action=""
                    onSubmit={handleSubmit}
                    className="ml-auto space-y-4"
                  >
                    <input
                      type="text"
                      name="name"
                      value={contactData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                    />
                    <textarea
                      placeholder="Message"
                      rows="6"
                      name="message"
                      value={contactData.message}
                      onChange={handleChange}
                      className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                    ></textarea>
                    <button
                      type="submit"
                      className="text-white bg-[#ebd04b] hover:bg-orange-600 font-semibold rounded-md text-md px-4 py-2 w-full"
                    >
                      Send
                    </button>
                  </form>

                  <div className="md:mb-20  ">
                <div className="flex font-serif font-semibold mb-4 justify-center text-2xl">
                  <h1 className="px-2 text-yellow-600">CONTACT</h1>
                  <p>INFO</p>
                </div>

              <div className="flex flex-col items-start	ms-10 ">
                <div className="">
                <p className="flex gap-2 align-center text-lg items-center	"><FaAddressCard /> Address </p>
              
                  <p className="text-sm text-gray-400 mt-1 ms-7">
                    Wright Town, Jabalpur
                  </p>
                  <p className="text-sm text-gray-400 mt-1 ms-7">482002</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-lg flex gap-2 items-center	"><IoCallSharp />
                  Contact</h2>
                  <Link
                    target="_blank"
                    to="tel:+919874632147"
                    className="  text-sm "
                  >
                    <strong className="ms-7 text-gray-400">+91 9874632147</strong>
                  </Link>
                </div>
                <div className="mb-4">
                  <h2 className="text-lg  flex items-center gap-2"><MdEmail />
                  Email</h2>
                  <Link
                    target="_blank"
                    to="mailto:demo@gmail.com"
                    className=" text-sm "
                  >
                    <strong className="ms-7 text-gray-400">Demo@gmail.com</strong>
                  </Link>
                </div>
                <div className=" ms-11 sm:ms-24 mt-9">
                  <h2 className="text-lg font-extrabold">We Are Socials</h2>
                  <div className="flex justify-center text-2xl gap-6 mt-2">
                    <Link to="mailto:demo@gmail.com" target="_blank">
                      <MdEmail className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                    </Link>
                    <Link to="https://facebook.com" target="_blank">
                      <FaFacebookSquare className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                    </Link>
                    <Link to="https://threads.net" target="_blank">
                      <FaSquareThreads className="hover:bg-yellow-600 hover:text-white p-1 rounded" />
                    </Link>
                  </div>
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
