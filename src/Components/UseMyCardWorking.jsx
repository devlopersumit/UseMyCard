import React from "react";
import logo from "../assets/Updated-UseMyCard.png";

function UseMyCardWorking() {
  return (
    <section className="w-full min-h-screen pt-2 pb-12 px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center text-[#373743] relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto w-full relative z-10 top-0">
        <div className="text-center mb-16 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How UseMyCard <span className="text-[#7B68EE]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start sharing card benefits securely with your
            trusted circle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Steps */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7B68EE] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-user-plus text-[#7B68EE] text-xl"></i>
                    <h3 className="text-xl font-semibold group-hover:text-[#7B68EE] transition-colors duration-300">
                      Create Your Account
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Sign up with just your name and email. We prioritize your privacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7B68EE] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-credit-card text-[#7B68EE] text-xl"></i>
                    <h3 className="text-xl font-semibold group-hover:text-[#7B68EE] transition-colors duration-300">
                      Add Your Cards
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Securely link your credit and debit cards to your account.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7B68EE] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-users text-[#7B68EE] text-xl"></i>
                    <h3 className="text-xl font-semibold group-hover:text-[#7B68EE] transition-colors duration-300">
                      Invite Trusted Users
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Add family members or friends to share your card benefits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7B68EE] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-share-alt text-[#7B68EE] text-xl"></i>
                    <h3 className="text-xl font-semibold group-hover:text-[#7B68EE] transition-colors duration-300">
                      Start Sharing
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Set spending limits and monitor transactions in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Logo */}
          <div className="relative">
            <div className="relative z-10 transform transition-all duration-500 hover:scale-105">
              <div className="w-full h-[600px]  rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#7B68EE]/20 to-[#9370DB]/20">
                <div className="text-center">
                  <img 
                    src={logo} 
                    alt="UseMyCard" 
                    className="w-[400px] h-[400px] object-contain transform transition-transform duration-300"
                  />
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <i className="fas fa-shield-check text-[#7B68EE] text-2xl"></i>
                      <span className="text-lg font-semibold text-[#373743]">Secure Sharing</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <i className="fas fa-clock text-[#7B68EE] text-2xl"></i>
                      <span className="text-lg font-semibold text-[#373743]">Real-time Monitoring</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <i className="fas fa-chart-line text-[#7B68EE] text-2xl"></i>
                      <span className="text-lg font-semibold text-[#373743]">Smart Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7B68EE]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#9370DB]/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseMyCardWorking;
