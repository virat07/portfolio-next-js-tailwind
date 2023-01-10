import React from "react";
import { IconComponent } from "./iconComponent";

function Footer() {
  const icons = ["twitter", "linkedin", "email"];
  return (
    <>
      <div className=" mt-10  w-full justify-between items-around	 p-5">
        <nav className="p-5  sm: block md:flex justify-between">
          <footer className="py-6 text-sm">
            <span className="  dark:text-gray-700 text-white font-bold text-lg mr-2">
              Bharat
            </span>
            &copy; {new Date().getFullYear()} All Rights Reversed
          </footer>
          <ul>
            <div className="flex gap-6 md:pb-5 md:pt-5 sm:justify-center">
              {icons.map((iconsName) => {
                return <IconComponent name={iconsName} />;
              })}
            </div>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center text-center bg-gray-50"></div>
    </>
  );
}

export default Footer;
