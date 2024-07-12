
import { FaHome, FaListAlt, FaReceipt, FaPencilAlt, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className="flex flex-col w-64  bg-gray-100 p-4 rounded-3xl">
      <div className="text-2xl font-bold text-gray-900">Rudra Constructions</div>
      <div className="text-sm text-gray-600">Jabalpur, MP</div>
      <nav className="mt-10">
        <Link className="flex items-center p-2 my-2 text-gray-900 bg-yellow-200 rounded-lg" to="#">
          <FaHome className="mr-2" /> Dashboard
        </Link>
        <Link className="flex items-center p-2 my-2 text-gray-700 hover:bg-yellow-100 rounded-lg" to="#">
          <FaListAlt className="mr-2" /> Add Projects
        </Link>
        <Link className="flex items-center p-2 my-2 text-gray-700 hover:bg-yellow-100 rounded-lg" to="#">
          <FaReceipt className="mr-2" /> Appoinment Request
        </Link>
        <Link className="flex items-center p-2 my-2 text-gray-700 hover:bg-yellow-100 rounded-lg" to="#">
          <FaPencilAlt className="mr-2" /> Site Visit Request
        </Link>

        <Link className="flex items-center p-2 my-2 text-gray-700 hover:bg-yellow-100 rounded-lg" to="#">
          <FaFileAlt className="mr-2" /> Reports
        </Link>

        <Link className="flex items-center p-2 my-2 text-gray-700 hover:bg-yellow-100 rounded-lg" to="#">
          <FaQuestionCircle className="mr-2" /> Help & Feedback
        </Link>
      </nav>
      <button className="mt-auto p-2 bg-yellow-500 text-white rounded-lg">Logout</button>
    </div>
  );
};

export default Navbar;
