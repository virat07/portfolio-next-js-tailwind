import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 mt-10  w-full justify-between items-around	 p-5">
        <nav className="p-5  flex justify-between">
          <h1 className=" text-gray-800 font-semibold">
            © 2021-2022 All rights reserved
          </h1>
          <ul>
            <div className="flex gap-6 pb-5">
            <a
              className="cursor-pointer"
              href="https://twitter.com/bharatgupta07"
              target="_blank"
            >
             <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/bharat-gupta-07/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            </a>
              
            </div>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center text-center bg-gray-50"></div>
    </>
  );
}

export default Footer;
