import React from "react";

const Hero = () => (
  <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-8 lg:px-16 flex justify-center items-center text-[#373743] relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8FC] via-[#f0f0ff] to-[#e8e8ff] animate-gradient-x"></div>
    
    {/* Floating Elements */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#907CE2]/20 to-[#7B68EE]/20 rounded-full blur-xl animate-float"></div>
    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-[#907CE2]/20 to-[#9370DB]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[#907CE2]/10 to-[#8A2BE2]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

    {/* Main Content */}
    <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight">
            Share Card Benefits
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#907CE2] to-[#7B68EE] bg-clip-text text-transparent">
            Without Sharing Card Numbers
          </h2>
          <p className="text-lg md:text-xl text-[#808089] max-w-2xl">
            UseMyCard helps you create trusted circles to share card benefits with friends and family without compromising security. Track usage, manage offers, and save more together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ">
              Get Started
            </button>
            {/* <button className="px-8 py-3 rounded-full font-semibold text-[#907CE2] bg-transparent border-2 border-[#907CE2] hover:bg-[#907CE2] hover:text-white transition-all duration-300">
              Learn More
            </button> */}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl font-bold text-[#907CE2]">100%</div>
              <div className="text-gray-600">Private & Secure</div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl font-bold text-[#907CE2]">Simple</div>
              <div className="text-gray-600">Easy to Use</div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl font-bold text-[#907CE2]">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Feature Cards */}
      <div className="flex-1 w-full max-w-lg">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Secure Card Sharing Made Simple</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-xl">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#1F2937]">Maximum Security</h4>
                <p className="text-gray-600">Share benefits without exposing sensitive card information</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-xl">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#1F2937]">Trusted Circles</h4>
                <p className="text-gray-600">Create groups with family and friends to share benefits</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#907CE2]/10 rounded-xl">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#1F2937]">Maximize Benefits</h4>
                <p className="text-gray-600">Get the most from your premium cards by sharing perks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero; 