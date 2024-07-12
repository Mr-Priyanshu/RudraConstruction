import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";





const Dashboard = () =>{

  const [totalCount, setTotalCount] = useState([]);


  useEffect(()=>{
    axios.get('http://localhost:8080/api/rudra-constrctions/contact-request-info')
    .then(Response =>{
      setTotalCount(Response.data)
    })
    .catch(err =>{
      console.log("here is error", err)
    })
  },[]);




  return(
    <div className="flex-1  p-6">
    <h1 className="text-4xl font-bold">Welcome back, Rudra</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

      <Link to="">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-2xl font-bold">7</p>
        <p className="text-gray-600">Ongoining Projects</p>
      </div>
      </Link>

      <Link to="/Admin-contact-request-page">

        <div  className="p-4 bg-white rounded-lg shadow-md">
     
        <p  className="text-2xl font-bold">{totalCount.length}</p>
     
        <p className="text-gray-600">Appointment  Request</p>
      </div>
      </Link>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-2xl font-bold">2</p>
        <p className="text-gray-600">Site Visit Request</p>
      </div>
    </div>
  </div>
  )
}
export default Dashboard;