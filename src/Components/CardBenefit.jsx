function CardBenefit() {
  return (
    <div className="w-full min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 flex justify-center items-center text-[#373743] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8FC] via-[#f0f0ff] to-[#e8e8ff] animate-gradient-x"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#907CE2]/20 to-[#7B68EE]/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-[#907CE2]/20 to-[#9370DB]/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[#907CE2]/10 to-[#8A2BE2]/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main Content */}
      <div className="max-w-full p-8 z-10 bg-transparent mt-16">
        <div className="w-[1216px] h-[540px] my-0 mx-auto bg-[#D8D4F9] rounded-2xl">
          <div className="w-full h-full flex justify-between items-center">
            <div className="basis-[48.5%] my-[50px] mx-[48px]">
              <h2 className="text-4xl leading-10 font-bold trackin-[-0.9px] text-[#373743] mb-[10px]">
                Ready to Start Sharing <br />
                <span className="text-[#8572E8]">Card Benefits?</span>
              </h2>
              <p className="text-[18px] leading-[28px] font-[400] tracking-normal text-[#808089] mb-[32px] ">
                Join our beta today and be the first to experience <br />
                UseMyCard. Early adopters get premium features <br />
                for free when we launch.
              </p>
              <button className="px-8 py-3 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 relative left-[90px] cursor-pointer sm:w-full max-w-[200px] sm:left-0 m-0">
                <i class="fa-solid fa-link"></i>
                Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBenefit;
