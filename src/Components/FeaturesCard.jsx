import "./CSS/FeaturesCard.css"

function FeaturesCard() {
    return (
        <div className="features-card">

            <div className="features-card-section">
         <div className="features-card-section-text-content">
            <h2>Features That Build <span>Trust</span></h2>
            <p>UseMyCard is designed with privacy and simplicity at its core, helping you <br /> share card benefits without sharing sensitive information.</p>
         </div>

          <div className="feature-cards">
            
            <div className="cards">
            <i className="fa-solid fa-user-shield"></i>
            <h3>Simple, Safe <br /> Onboarding</h3>
            <p>Create your account with minimal information. No card numbers are <br /> ever shared on our platform.</p>
            </div>

             
            <div className="cards">
            <i className="fa-solid fa-users-gear"></i>
            <h3>Build Your Circle</h3>
            <p>Invite trusted friends and family to join your circle. Accept or reject requests with ease.</p>
            </div>

             
            <div className="cards">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Track Card Usage</h3>
            <p>Log when you use someone's card offer. Keep track of amounts and purpose for transparency.</p>
            </div>

             
            <div className="cards">
            <i className="fa-solid fa-bell"></i>
            <h3>Stay Notified</h3>
            <p>Get notifications when someone uses your shared card for an offer, helping you stay informed.</p>
            </div>

          </div>
            </div>
        </div>
    );
}

export default FeaturesCard