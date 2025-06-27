function FeaturesCard() {
  const features = [
    {
      icon: "shield-halved",
      title: "Maximum Security",
      description: "Share benefits without exposing sensitive card information"
    },
    {
      icon: "users",
      title: "Trusted Circles",
      description: "Create groups with family and friends to share benefits"
    },
    {
      icon: "gift",
      title: "Maximize Benefits",
      description: "Get the most from your premium cards by sharing perks"
    },
    {
      icon: "chart-line",
      title: "Smart Analytics",
      description: "Track spending patterns and optimize card usage"
    },
    {
      icon: "clock",
      title: "Real-time Monitoring",
      description: "Monitor transactions and set spending limits instantly"
    },
    {
      icon: "bell",
      title: "Instant Notifications",
      description: "Get alerts for all transactions and important updates"
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F8FC]" id="features-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="text-[#7B68EE]">Features</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to share your card benefits securely and efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7B68EE]/10 rounded-xl group-hover:bg-[#7B68EE]/20 transition-colors duration-300">
                  <i className={`fas fa-${feature.icon} text-[#7B68EE] text-xl md:text-2xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-[#1F2937] group-hover:text-[#7B68EE] transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesCard;
