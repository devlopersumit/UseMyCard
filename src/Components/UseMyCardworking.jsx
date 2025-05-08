import "./CSS/UseMyCardWorking.css"
import logo from "../assets/Updated-UseMyCard.png";

function UseMyCardWorking() {
    return(
       <div className="usemycard-section">
        <div className="text-content">
            <h2>How UseMyCard <span>Works</span></h2>
            <p>Follow these simple steps to start sharing card benefits securely with your<br />trusted circle.</p>
        </div>
        <div className="usemycard-content-section">
         <div className="left-section">
             <div className="left-section-cards first-card">
                <div className="numbering highlight">
                    1
                </div>
                <div className="texts">
                     <h3>Create Your Account</h3>
                     <p>Sign up with just your name and email. We prioritize your privacy.</p>
                </div>
             </div>

             <div className="left-section-cards">
                <div className="numbering">
                    2
                </div>
                <div className="texts">
                     <h3>Add Your Cards</h3>
                     <p>Securely link your credit and debit cards to your account.</p>
                </div>
             </div>

             <div className="left-section-cards">
                <div className="numbering">
                    3
                </div>
                <div className="texts">
                     <h3>Invite Trusted Users</h3>
                     <p>Add family members or friends to share your card benefits.</p>
                </div>
             </div>

             <div className="left-section-cards">
                <div className="numbering">
                    4
                </div>
                <div className="texts">
                     <h3>Start Sharing</h3>
                     <p>Set spending limits and monitor transactions in real-time.</p>
                </div>
             </div>
         </div>

         <div className="right-section">
           <img src={logo} alt="UseMyCard" />
         </div>
        </div>
       </div>
    );
}

export default UseMyCardWorking