import React from "react";

const Hero = () => (
  <section className="w-full p-[80px] flex justify-around bg-[#F8F8FC] text-[#373743] flex-wrap font-[display flex flex-row">
    {/* Left Side */}
    <div className="basis-[45%] flex flex-col gap-[15px] mt-[100px] ml-[70pxpx]">
      <h1 className="text-[60px] leading-[60px] tracking-normal font-bold text-[#1F2937]">
        Share Card Benefits
      </h1>
      <h2 className="text-[60px] leading-[60px] tracking-normal font-bold" style={{ color: '#907CE2' }}>
        Without Sharing <br /> Card Numbers
      </h2>
      <p className="text-[20px] leading-[30px] font-[400] tracking-normal text-[#808089] mb-[20px]">
        UseMyCard helps you create trusted circles to share card benefits with friends and family without compromising security. Track usage, manage offers, and save more together.
      </p>
      <button className="py-[0.6rem] px-[2rem] rounded-[30px] font-semibold cursor-pointer bg-[#907CE2] transition-all duration-[0.3s] ease-linear text-[0.95rem] tracking-[0.5px] bg-[#907CE2]  border-none text-white shadow-[0 4px 12px rgba(0,123,255,0.2)] my-0 mx-auto hover:bg-[#0056b3] translate-[-2px] shadow-[0 6px 15px rgba(0,123,255,0.4)]">
        Get Started
      </button>
      <div className="flex justify-evenly">
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
      <div className="basis-[55%] w-[612px] h-[432px] border-none rounded-2xl bg-[#907CE2] p-[32px] text-white mt-[100px] ml-[80px]" style={{ backgroundColor: '#907CE2' }}>
        <h3 className="text-[30px] leading-[32px] font-bold tracking-normal p-[20px] my-3">Secure Card Sharing Made Simple</h3>
        <ul className="space-y-6 flex flex-col gap-4">
          <li className="flex items-start ">
            <span className="mr-4 text-3xl text-white">🛡️</span>
            <div>
              <div className="font-bold text-xl">Maximum Security</div>
              <div>Share benefits without exposing sensitive card information</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-3xl">👥</span>
            <div>
              <div className="font-bold text-xl">Trusted Circles</div>
              <div>Create groups with family and friends to share benefits</div>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-3xl">🎁</span>
            <div>
              <div className="font-bold text-xl">Maximize Benefits</div>
              <div>Get the most from your premium cards by sharing perks</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Hero; 