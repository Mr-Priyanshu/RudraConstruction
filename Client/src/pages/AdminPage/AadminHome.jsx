import Navbar from './AdminNavbar';
// import ShowContactRequest from './ContactRequest';
import Dashboard from './Dashboard';


const AdminHome = () =>{
  return(
    <div className="main bg-gray-200 pt-24 pb-1">
      <div className='bg-white m-7 rounded-3xl  shadow-lg'>

      
    
    <div className="flex rounded-3xl  h-dvh">
    <Navbar />
    <Dashboard/>
   
    
  </div>
  </div>
  </div>
  );

}
export default AdminHome;