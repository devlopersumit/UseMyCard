function CardBenefit() {
  return (
    <div className="w-full min-h-screen pt-16 md:pt-24 pb-8 md:pb-16 px-4 md:px-8 lg:px-16 flex justify-center items-center text-[#373743] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8FC] via-[#f0f0ff] to-[#e8e8ff] animate-gradient-x"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-r from-[#907CE2]/20 to-[#7B68EE]/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-r from-[#907CE2]/20 to-[#9370DB]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-r from-[#907CE2]/10 to-[#8A2BE2]/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main Content */}
      <div className="max-w-full p-4 md:p-8 z-10 bg-transparent mt-8 md:mt-16">
        <div className="w-full max-w-[1216px] min-h-[540px] my-0 mx-auto bg-[#D8D4F9] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center p-4 md:p-8">
            {/* Left Side */}
            <div className="w-full lg:basis-[48.5%] my-8 md:my-[50px] mx-4 md:mx-[48px] text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl leading-[1.2] font-bold tracking-[-0.9px] text-[#373743] mb-4 md:mb-6">
                Ready to Start Sharing <br />
                <span className="text-[#8572E8] bg-gradient-to-r from-[#8572E8] to-[#7B68EE] bg-clip-text text-transparent">Card Benefits?</span>
              </h2>
              <p className="text-base md:text-[18px] leading-[1.6] font-normal tracking-normal text-[#808089] mb-6 md:mb-8">
                Join our beta today and be the first to experience <br className="hidden sm:block" />
                UseMyCard. Early adopters get premium features <br className="hidden sm:block" />
                for free when we launch.
              </p>
              <button className="px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#907CE2] to-[#7B68EE] hover:from-[#7B68EE] hover:to-[#6A5ACD] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 justify-center lg:justify-start mx-auto lg:mx-0 cursor-pointer w-full sm:w-auto max-w-[200px]">
                <i className="fa-solid fa-link"></i>
                Join Now
              </button>
            </div>

            {/* Right Side */}
            <div className="w-full lg:basis-[48.5%] flex flex-col justify-start items-start m-4 md:m-[48px] gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="w-full md:w-[536px] p-4 md:p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-[#DFDFE1] shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-[#907CE2]/10 text-[#8572E8] group-hover:bg-[#907CE2]/20 transition-colors duration-300">
                    <i className="fa-solid fa-users text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#373743] mb-1 md:mb-2">Your Circle, Your Savings</h3>
                    <p className="text-xs md:text-sm leading-relaxed text-[#808089]">
                      Organize your trusted circle and maximize savings together
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-[536px] p-4 md:p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-[#DFDFE1] shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-[#907CE2]/10 text-[#8572E8] group-hover:bg-[#907CE2]/20 transition-colors duration-300">
                    <i className="fa-solid fa-shield-halved text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#373743] mb-1 md:mb-2">100% Private & Secure</h3>
                    <p className="text-xs md:text-sm leading-relaxed text-[#808089]">
                      No card numbers, just card names - complete privacy
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full md:w-[536px] p-4 md:p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-[#DFDFE1] shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-[#907CE2]/10 text-[#8572E8] group-hover:bg-[#907CE2]/20 transition-colors duration-300">
                    <i className="fa-solid fa-handshake text-lg md:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#373743] mb-1 md:mb-2">Start with Trusted Friend</h3>
                    <p className="text-xs md:text-sm leading-relaxed text-[#808089]">
                      Begin small and expand your circle as you build trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBenefit;
