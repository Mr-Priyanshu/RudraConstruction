
import { useState, useEffect } from "react";
import Navbar from "./AdminNavbar";
import axios from "axios";


const ShowContactRequest = () => {
  const [contact, setContact] = useState([]);

  const handleFetchRequest = () =>{
    axios.get('http://localhost:8080/api/rudra-constrctions/contact-request-info')
    .then(Response =>{
      console.log(Response.data)
      setContact(Response.data)
    })
    .catch(err =>{
      console.log("here is error", err)
    })
  };

  useEffect(()=>{
    handleFetchRequest()
  },[]);




  return (
    <div className="main bg-gray-200 pt-24 pb-1">
      <div className='bg-white m-7 rounded-3xl  shadow-lg'>
        <div className="flex rounded-3xl  h-dvh">
          <Navbar />
          <div className="flex-1 p-6 flex flex-col items-center ">
            <div className="p-5 m-5">
              <h1 className="text-bold text-4xl text-gray-700">Contact Request Details</h1>
            </div>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
              <table className="table-auto w-full text-sm text-left rtl:text-right text-black ">
                <thead className="text-xs text-black uppercase bg-yellow-200 border-b border-gray-700 "> 
                  <tr className="bg-yellow-200 border-b border-yellow-900">
                    <th scope="col" className="px-6 py-3">S.No.</th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Subject</th>
                    <th scope="col" className="px-6 py-3">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contact.map((request, index) =>(
                    <tr key={index} className="border">
                    <td className="px-6 py-4">{index+1}</td>
                    <td className="px-6 py-4">{request.name}</td>
                    <td className="px-6 py-4">{request.email}</td>
                    <td className="px-6 py-4">{request.subject}</td>
                    <td className="px-6 py-4">{request.message}</td>
                  </tr>
                  ))}
          
                </tbody>
              </table>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
export default ShowContactRequest;