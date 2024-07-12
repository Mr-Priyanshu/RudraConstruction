
import Navbar from './AdminNavbar';

const AdminHome = () =>{
  return(
    <div className="main bg-gray-200 pt-24 pb-1">
      <div className='bg-white m-7 rounded-3xl  shadow-lg'>

      
    
    <div className="flex rounded-3xl  h-dvh">
    <Navbar />
    <div className="flex-1  p-6">
      <h1 className="text-4xl font-bold">Welcome back, Rudra</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-2xl font-bold">7</p>
          <p className="text-gray-600">Ongoining Projects</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-2xl font-bold">3</p>
          <p className="text-gray-600">Appointment  Request</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-2xl font-bold">2</p>
          <p className="text-gray-600">Site Visit Request</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  );

}
export default AdminHome;