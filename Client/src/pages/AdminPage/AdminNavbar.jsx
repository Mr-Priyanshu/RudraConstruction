
import { FaHome, FaListAlt, FaReceipt, FaPencilAlt, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const activeLinkClass = (path) =>{
    return location.pathname === path 
    ? "flex items-center p-2 my-2 text-gray-700 bg-yellow-200 rounded-lg "
    : "flex items-center p-2 my-2 text-gray-900 hover:bg-yellow-100 rounded-lg"

  }
  return (

    <div className="flex flex-col w-64  bg-gray-100 p-4 rounded-3xl">
      <div className="text-2xl font-bold text-gray-900">Rudra Constructions</div>
      <div className="text-sm text-gray-600">Jabalpur, MP</div>
      <nav className="mt-10">
        <Link 
        className={activeLinkClass("/Admin-Home-Page")}
        to="/Admin-Home-Page">
          <FaHome className="mr-2" /> Dashboard
        </Link>
        <Link className={activeLinkClass("/Admin-add-ongoing-projects")} to="/Admin-add-ongoing-projects">
          <FaListAlt className="mr-2" /> Add Ongoing Projects
        </Link>
        <Link

          className={activeLinkClass("/Admin-contact-request-page")}
          to="/Admin-contact-request-page">
          <FaReceipt className="mr-2" /> Appoinment Request
        </Link>
        <Link className={activeLinkClass("")} to="#">
          <FaPencilAlt className="mr-2" /> Site Visit Request
        </Link>

        <Link className={activeLinkClass("")} to="#">
          <FaFileAlt className="mr-2" /> Reports
        </Link>

        <Link className={activeLinkClass("")} to="#">
          <FaQuestionCircle className="mr-2" /> Help & Feedback
        </Link>
      </nav>
      <button className="mt-auto p-2 bg-yellow-500 text-white rounded-lg">Logout</button>
    </div>
  );
};

export default Navbar;
