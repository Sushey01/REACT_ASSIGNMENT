import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };
  
    return (
        <nav className="bg-gray-900 py-4 md:py-6">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl md:text-2xl text-white font-bold">
                    <Link to="/">HIRE ME!</Link>
                </h1>
                <div className="md:hidden">
                    <button onClick={toggleNav} className="text-white focus:outline-none">
                        {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                    </button>
                </div>
                <ul className={`md:flex md:items-center md:space-x-4 ${navOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-800 py-4 rounded-lg md:relative md:bg-transparent md:py-0 md:block md:space-x-0 md:space-y-0 md:w-auto md:top-auto md:left-auto md:flex-row`}>
                    <li>
                        <Link to="/experience" className="block text-white hover:text-gray-300 px-4 py-2">Experience</Link>
                    </li>
                    <li>
                        <Link to="/" className="block text-white hover:text-gray-300 px-4 py-2">About</Link>
                    </li>
                    <li>
                        <Link to="/Blog" className="block text-white hover:text-gray-300 px-4 py-2">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
