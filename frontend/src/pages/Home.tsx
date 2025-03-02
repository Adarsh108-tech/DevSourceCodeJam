import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-xl"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold neon-text tracking-wide">Welcome to DevSource Social</h1>
          <p className="mt-4 text-lg text-gray-300">Connect, Innovate, and Showcase Your Tech</p>
        </div>
      </header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-3xl font-semibold mb-8 neon-text">Explore Features</h2>
        <section className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glassmorphism-card">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-400">&copy; 2025 DevSource. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  { title: "💬 Messages & Chats", description: "Instantly connect with developers worldwide." },
  { title: "🎤 Live Seminars", description: "Attend and host live coding sessions." },
  { title: "🚀 Showcase Projects", description: "Share your work and gain recognition." },
  { title: "🔍 Search & Discover", description: "Find developers, projects, and more." },
  { title: "👤 Profile Customization", description: "Create your tech portfolio." },
  { title: "🔒 Secure Login", description: "Sign up with robust authentication." }
];

export default Home;
