import React from "react";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="text-center py-16 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to DevSource Social</h1>
        <p className="mt-4 text-lg">Connect, Share, and Collaborate with Developers</p>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">Explore Features</h2>
          <p className="text-gray-700 mt-2">Discover new projects, chat with developers, and join live seminars.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Messages & Chats</h3>
            <p className="text-gray-600">Connect with fellow developers and share knowledge.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Live Seminars</h3>
            <p className="text-gray-600">Join live discussions and tech webinars.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Showcase Projects</h3>
            <p className="text-gray-600">Show your work and get recognized in the community.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
