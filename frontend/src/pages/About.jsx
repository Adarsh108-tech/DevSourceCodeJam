import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      {/* Title at the Top */}
      <h1 className="cyberpunk-heading mb-6">About DevSource 🔥</h1>
      
      {/* Introduction */}
      <p className="text-lg text-gray-300 max-w-3xl text-center leading-relaxed">
        DevSource is a  next-gen developer ecosystem built to  connect, innovate, 
        and showcase the best minds in tech. We are redefining the  developer experience   
        with futuristic networking, learning, and collaboration tools.
      </p>

      {/* Mission Section */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold neon-text mb-4">🚀 Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We aim to create a futuristic space where developers can:
        </p>
        <ul className="futuristic-list mt-4 space-y-3 text-left mx-auto max-w-2xl">
          <li>Encourage next-gen innovations  .</li>
          <li>Provide cutting-edge resources  .</li>
          <li>Enable global developer networking  .</li>
          <li>Empower skill-building through real projects  .</li>
        </ul>
      </div>

      {/* Vision Section */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold neon-text mb-4">🌍 Our Vision</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          DevSource envisions a hyper-connected developer world where tech innovation 
          happens seamlessly. With AI-powered tools, futuristic UI/UX, and community-driven 
          projects , we are setting new standards in tech collaboration.
        </p>
      </div>

      {/* What Makes DevSource Unique? */}
      <div className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold neon-text mb-4">🔗 Why DevSource?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">💬 Developer Network</h3>
            <p className="text-gray-300">
                AI-matched networking for tech collaborations.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🚀 Futuristic Project Showcase</h3>
            <p className="text-gray-300">
              Showcase work in interactive 3D portfolios  .
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🎤 Live Hologram Sessions</h3>
            <p className="text-gray-300">
              Attend virtual holographic tech talks.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">📚 AI-Powered Learning Hub</h3>
            <p className="text-gray-300">
                AI-curated learning paths for all levels.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🛠️ Quantum Open Source</h3>
            <p className="text-gray-300">
              Work on quantum computing open-source projects.
            </p>
          </div>
          <div className="glassmorphism-card p-6">
            <h3 className="text-xl font-bold">🔒 Secure Web3 Auth</h3>
            <p className="text-gray-300">
                Blockchain-based login for next-level security.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-16 w-full max-w-3xl text-center">
        <h2 className="text-3xl font-semibold neon-text mb-4">🌟 Join the Future of DevSource</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The future of tech collaboration is here. Whether you're a beginner or an 
          expert, DevSource provides an immersive, futuristic environment to learn, 
          build, and innovate.
        </p>
      </div>
    </div>
  );
};

export default About;
