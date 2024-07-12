// MobileNavBar.js

import { AiFillHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { MdContactPhone } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdDesignServices } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";



import { Link } from 'react-router-dom';

const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 rounded-t-3xl right-0 bg-white shadow-lg py-2">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <Link to="/" className='flex items-center justify-center flex-col'>
          
          <AiFillHome size={24} className="text-orange-400"/>
          <span className="text-xs mt-1">Home</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/AboutUs" className='flex items-center justify-center flex-col'>
          
          <FcAbout size={24}  />
          <span className="text-xs mt-1 text-gray-500">About</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/SingleServices" className='flex items-center justify-center flex-col'>
          
          <MdDesignServices size={24} />
          <span className="text-xs mt-1">Services</span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link to="/liveProject" className='flex items-center justify-center flex-col'>
          
          <GoProjectSymlink size={24} />
          <span className="text-xs mt-1">Projects</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/ContactUs" className='flex items-center justify-center flex-col'>
          <MdContactPhone size={24} />
          <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
