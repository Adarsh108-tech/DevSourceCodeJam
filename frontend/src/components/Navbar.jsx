import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <div className="text-lg font-bold">DevSource Social</div>
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/seminars">Live Seminars</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/showcase">Showcase</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
