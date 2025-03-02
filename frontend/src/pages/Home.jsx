import React from "react";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-25 blur-xl"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold cyberpunk-heading tracking-wider">
            Welcome to DevSource 🔥
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Connect, Innovate, and Showcase Your Tech
          </p>
        </div>
      </header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-4xl font-semibold mb-10 neon-text">
          🚀 Explore Features
        </h2>
        <section className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glassmorphism-card p-6">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Why DevSource Section */}
      <div className="mt-16 w-full max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold neon-text mb-6">🌟 Why Choose DevSource?</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          DevSource is a  revolutionary ecosystem designed to empower developers with 
           next-gen collaboration tools, AI-powered learning, and futuristic project showcases.
          Whether you're a  beginner or an  expert, DevSource is the  ultimate hub for tech innovators.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🔗 AI-Powered Networking</h3>
            <p className="text-gray-300">
              Connect with  like-minded developers using AI matchmaking.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🚀 Project Marketplace</h3>
            <p className="text-gray-300">
              Showcase your  open-source and freelance projects.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">📚 AI Learning Hub</h3>
            <p className="text-gray-300">
              Learn  cutting-edge tech with AI-curated content.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">💡 Hackathons & Events</h3>
            <p className="text-gray-300">
              Participate in  exclusive hackathons and  tech meetups.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold neon-text mb-4">⚡ Be Part of the Future</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Ready to  explore,connect, and innovate? Join  DevSource** and 
          become part of a next-gen developer community pushing the boundaries of technology. 
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 border-t border-gray-700">
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
