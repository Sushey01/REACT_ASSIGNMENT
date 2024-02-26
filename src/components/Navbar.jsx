import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00DF9a]">HIRE ME!</h1>
      <ul className="hidden md:flex">
        
        
        <li className="p-4">Experience</li>
        <li className="p-4">About</li>
        <li className="p-4">Blog</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00DF9a] m-4">HIRE ME!</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">Experience</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4 border-b border-gray-700">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
