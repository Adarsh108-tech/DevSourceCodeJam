import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-md py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-extrabold neon-text">DevSource 🔥</h1>
      <ul className="flex space-x-6 text-gray-300">
        {["Home", "About", "Messages", "Live", "Profile", "Showcase", "Search"].map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase()}`} className="hover:text-pink-400 transition-all duration-300">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
