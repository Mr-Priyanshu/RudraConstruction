import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import axios from 'axios'

const Get = () => {
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
      alert("submit")
    } catch (error) {
      console.log(error);
    }
    
  }




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
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <input
                  type="email"
                  required
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                />
                <textarea

                  required
                  placeholder="Message"
                  rows="6"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
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
                    <Link to="mailto:vinay@gmail.com" target="_blank">
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
    </>
  );
}

export default Get;
