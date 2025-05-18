function CardBenefit() {
  return (
    <div className="w-full min-h-screen pt-24 pb-12 px-4 md:px-8 lg:px-16 flex justify-center items-center text-[#373743] relative overflow-hidden">
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
    </div>
  );
}

export default CardBenefit;
