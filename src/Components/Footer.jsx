import logo from "../assets/Updated-UseMyCard.png";

function Footer() {
  return (
    <div
      className="w-full min-h-[340px] bg-[#373743] pt-[40px] md:pt-[80px] pb-0 px-4 md:px-[96px] text-[14px] md:text-[16px] leading-6 font-[400] tracking-normal text-white flex flex-col gap-4"
      id="contact">

        <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-4">
      {/* First Column */}
      <div className="basis-full md:basis-[30%] flex flex-col">
        <div className="flex items-center">
          <div>
            <img
              src={logo}
              alt="UseMyCard"
              className="h-[35px] md:h-[40px] w-auto mr-2 transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
            UseMy<span className="text-[#907ce2]">Card</span>
          </h1>
        </div>
        <p className="text-gray-500 mt-3">
          Making credit card management
          <br />
          simple and efficient.
        </p>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-2 basis-full md:basis-[25%]">
        <h1 className="text-[18px] md:text-[20px] font-bold">Quick Links</h1>
        <p className="text-gray-500 hover:text-[#907ce2] transition-all duration-300">
          <a href="features">Features</a>
        </p>
        <p className="text-gray-500 hover:text-[#907ce2] transition-all duration-300">
          <a href="#benefits">Benefits</a>
        </p>
        <p className="text-gray-500 hover:text-[#907ce2] transition-all duration-300">
          <a href="#FAQ">FAQ</a>
        </p>
        <p className="text-gray-500 hover:text-[#907ce2] transition-all duration-300">
          <a href="#contact">Contact</a>
        </p>
      </div>

      {/* Third Column */}
      <div className="flex flex-col gap-2 basis-full md:basis-auto">
        <h1 className="text-[18px] md:text-[20px] font-bold">Connect With Us</h1>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sumit-jha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin text-2xl md:text-3xl text-gray-500 hover:text-[#907ce2] transition-all duration-300"></i>
          </a>
          <a href="https://x.com/_sumitjha_?t=4nSWLPjfWOEhS06PoX9-Lg&s=09" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter text-2xl md:text-3xl text-gray-500 hover:text-[#907ce2] transition-all duration-300"></i>
          </a>
          <a href="https://github.com/The-Boring-Education/byi-cohort-1-devlopersumit" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github text-2xl md:text-3xl text-gray-500 hover:text-[#907ce2] transition-all duration-300"></i>
          </a>
        </div>
      </div>
      </div>
      <p className="text-gray-500 text-center mt-8 md:mt-14">&copy;2025 UseMyCard. All rights reserved.</p>
    </div>
  );
}

export default Footer;
