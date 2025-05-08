import "./CSS/Hero.css"

function Hero() {
    return (
    <div className="hero-section">
        <div className="left">

        <div className="upper-left">
          <h1>Share Card Benefits <br />
         <span> Without Sharing</span> <br /><span> Card Numbers </span></h1>

         <p>UseMyCard helps you create trusted circles to share card benefits <br /> with friends and family without compromising security. Track usage,<br /> manage offers, and save more together.</p>

            <div className="hero-btn">
         <button>Get Started</button>
         </div>
         </div>

          <div className="lower-left">
            <div>
            <h1>100%</h1>
            <span>Private & Secure</span>
            </div>

           <div>
            <h1>Simple</h1>
            <span>Easy to Use</span>
            </div>

          </div>

        </div>

        <div className="right">
          <div className="right-inner-section">
            <h3>Secure Card Sharing Made Simple</h3>

            <div className="right-section-content">

                <div className="feature-item">
                    <div className="icon">
                        <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div className="text-content">
                        <h4>Maximum Security</h4>
                        <p>Share benefits without exposing sensitive card information</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="icon">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="text-content">
                        <h4>Trusted Circles</h4>
                        <p>Create groups with family and friends to share benefits</p>
                    </div>
                </div>

                <div className="feature-item">
                    <div className="icon">
                        <i className="fa-solid fa-gift"></i>
                    </div>
                    <div className="text-content">
                        <h4>Maximize Benefits</h4>
                        <p>Get the most from your premium cards by sharing perks</p>
                    </div>
                </div>
                
            </div>
          </div>
        </div>

    </div>
    );
}

export default Hero 