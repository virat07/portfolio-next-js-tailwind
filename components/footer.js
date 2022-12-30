import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className=" mt-10  w-full justify-between items-around	 p-5">
        <nav className="p-5  flex justify-between">
          <footer className="py-6  text-gray-500 text-sm">
            <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
              Bharat
            </span>
            &copy; {new Date().getFullYear()} All Rights Reversed
          </footer>

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
