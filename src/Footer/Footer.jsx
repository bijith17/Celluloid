import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa6'
function Footer() {
  return (
    <div className=' py-4 px-6 text-white'>
      <div className="flex justify-center space-x-4">
          <FaFacebook className='text-xl sm:text-2xl cursor-pointer'/>
          <FaInstagram className='text-xl sm:text-2xl cursor-pointer'/>
          <FaTwitter className='text-xl sm:text-2xl cursor-pointer'/>
          <FaYoutube className='text-xl sm:text-2xl cursor-pointer'/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <ul>
          <li className='py-1'><a href="" className='text-white'>Audio Description</a></li>
          <li className='py-1'><a href="" className='text-white'>Investor Relations</a></li>
          <li className='py-1'><a href="" className='text-white'>Legal Notices</a></li>
          <li className='py-1'><button className='mt-2 text-white bg-transparent border border-hover hover:bg-hover transition duration-500 px-3 py-2 text-sm'>Service Code</button></li>
          <li className='py-1'>&copy;2023 Celluloid, Inc</li>
        </ul>
        <ul>
          <li className='py-1'><a href="" className='text-white'>Help Centre</a></li>
          <li className='py-1'><a href="" className='text-white'>Jobs</a></li>
          <li className='py-1'><a href="" className='text-white'>Cookie Preferences</a></li>
        </ul>
        <ul>
          <li className='py-1'><a href="" className='text-white'>Gift Cards</a></li>
          <li className='py-1'><a href="" className='text-white'>Terms of Use</a></li>
          <li className='py-1'><a href="" className='text-white'>Corporate Information</a></li>
        </ul>
        <ul>
          <li className='py-1'><a href="" className='text-white'>Media Centre</a></li>
          <li className='py-1'><a href="" className='text-white'>Privacy</a></li>
          <li className='py-1'><a href="" className='text-white'>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
