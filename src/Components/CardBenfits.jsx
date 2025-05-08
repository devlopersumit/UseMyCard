import "./CSS/CardBenfits.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faShieldAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons'

function CardBenefits() {
    return (
     <div className="outer-container">
        <div className="inner-container">
            <div className="card-container">
                <div className="left-side">
                   <h2>Ready to Start Sharing <br />
                   <span>Card Benefits?</span></h2>
                   <p>Join our beta today and be the first to experience <br />UseMyCard. Early adopters get premium features <br />for free when we launch.</p>
                   <button>Join Now</button>
                </div>

                <div className="right-side">
                    <div className="cards">
                        <div className="cards-icon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="cards-text">
                            <h3>Your Circle, Your Savings</h3>
                            <p>Organize your trusted circle and maximize savings together</p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="cards-icon">
                            <FontAwesomeIcon icon={faShieldAlt} />
                        </div>
                        <div className="cards-text">
                            <h3>100% Private & Secure</h3>
                            <p>No card numbers, just card names - complete privacy</p>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="cards-icon">
                            <FontAwesomeIcon icon={faUserFriends} />
                        </div>
                        <div className="cards-text">
                            <h3>Start with Trusted Friend</h3>
                            <p>Begin small and expand your circle as you build trust</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    );
}

export default CardBenefits