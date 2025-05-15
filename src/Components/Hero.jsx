import React from "react";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100 min-h-[80vh]">
    {/* Left Side */}
    <div className="flex-1">
      <h1 className="text-5xl font-bold text-gray-900 mb-2">
        Share Card Benefits
      </h1>
      <h2 className="text-5xl font-bold" style={{ color: '#907CE2' }}>
        Without Sharing <br /> Card Numbers
      </h2>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        UseMyCard helps you create trusted circles to share card benefits with friends and family without compromising security. Track usage, manage offers, and save more together.
      </p>
      <button className="px-8 py-3 rounded-full font-semibold shadow transition mb-8 text-white" style={{ backgroundColor: '#907CE2' }}>
        Get Started
      </button>
      <div className="flex space-x-16 mt-4">
        <div>
          <div className="text-3xl font-bold">100%</div>
          <div className="text-gray-600">Private & Secure</div>
        </div>
        <div>
          <div className="text-3xl font-bold">Simple</div>
          <div className="text-gray-600">Easy to Use</div>
        </div>
      </div>
    </div>
    {/* Right Side */}
    <div className="flex-1 mt-12 md:mt-0 md:ml-12">
      <div className="rounded-2xl p-10 text-white shadow-lg" style={{ backgroundColor: '#907CE2' }}>
        <h3 className="text-3xl font-bold mb-6">Secure Card Sharing Made Simple</h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <span className="mr-4 text-3xl">🛡️</span>
            <div>
              <div className="font-bold text-lg">Maximum Security</div>
              <div>Share benefits without exposing sensitive card information</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-3xl">👥</span>
            <div>
              <div className="font-bold text-lg">Trusted Circles</div>
              <div>Create groups with family and friends to share benefits</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-3xl">🎁</span>
            <div>
              <div className="font-bold text-lg">Maximize Benefits</div>
              <div>Get the most from your premium cards by sharing perks</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero; 