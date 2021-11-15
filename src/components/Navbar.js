import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-purple-600 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            iSearch 🔎
          </p>
        </Link>

        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={() => setDarkTheme(!darkTheme)}
            />
            <div className="block w-16 h-9 rounded-full bg-gray-800 dark:bg-gray-200"></div>
            <div
              className="absolute left-2 top-1 w-6 h-6 rounded-full transition text-xl"
              style={{ transform: darkTheme && "translateX(100%)" }}
            >
              {darkTheme ? "💡" : "🌙"}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
