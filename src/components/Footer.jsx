import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-10 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-[#00df9a]">Shekhar Magar</h1>
            <p className="py-4">
              Beyond work, I pursue diverse hobbies, prioritizing a balanced
              lifestyle.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
            <form>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-1">Name</label>
                <input type="text" id="name" className="input" />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-1">Email</label>
                <input type="email" id="email" className="input" />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="mb-1">Message</label>
                <textarea id="message" rows="4" className="input"></textarea>
              </div>
              <button type="submit" className="btn bg-[#263c78] hover:bg-green-500 transition-colors duration-300 ease-in-out">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shekhar Magar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
