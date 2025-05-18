function FeaturesCard() {
  return (
    <section className="w-full min-h-screen pt-4b-12 px-4 md:px-8 lg:px-16 flex justify-center items-center text-[#373743] relative overflow-hidden">
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
      <div className="max-w-[1200px] w-full my-0 mx-auto z-10 absolute top-24">
        <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Features That Build <span className="text-[#7B68EE]">Trust</span>
          </h2>
          <p className="text-lg text-center text-gray-600 animate-fade-in-up">
            UseMyCard is designed with privacy and simplicity at its core,
            helping you <br /> share card benefits without sharing sensitive
            information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative">
              <i className="fas fa-user-shield text-3xl text-[#7B68EE] mb-4 block transform transition-transform duration-300 group-hover:scale-110"></i>
              <i className="fas fa-shield-halved text-xl text-[#7B68EE]/30 absolute -top-2 -right-2 transform rotate-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#7B68EE] transition-colors duration-300">
              Simple, Safe <br /> Onboarding
            </h3>
            <p className="text-gray-600">
              Create your account with minimal information. No card numbers are
              ever shared on our platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative">
              <i className="fas fa-users-gear text-3xl text-[#7B68EE] mb-4 block transform transition-transform duration-300 group-hover:scale-110"></i>
              <i className="fas fa-user-plus text-xl text-[#7B68EE]/30 absolute -top-2 -right-2 transform rotate-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#7B68EE] transition-colors duration-300">Build Your Circle</h3>
            <p className="text-gray-600">
              Invite trusted friends and family to join your circle. Accept or
              reject requests with ease.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative">
              <i className="fas fa-chart-line text-3xl text-[#7B68EE] mb-4 block transform transition-transform duration-300 group-hover:scale-110"></i>
              <i className="fas fa-chart-simple text-xl text-[#7B68EE]/30 absolute -top-2 -right-2 transform rotate-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#7B68EE] transition-colors duration-300">Track Card Usage</h3>
            <p className="text-gray-600">
              Log when you use someone's card offer. Keep track of amounts and
              purpose for transparency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative">
              <i className="fas fa-bell text-3xl text-[#7B68EE] mb-4 block transform transition-transform duration-300 group-hover:scale-110"></i>
              <i className="fas fa-envelope text-xl text-[#7B68EE]/30 absolute -top-2 -right-2 transform rotate-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#7B68EE] transition-colors duration-300">Stay Notified</h3>
            <p className="text-gray-600">
              Get notifications when someone uses your shared card for an offer,
              helping you stay informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCard;
