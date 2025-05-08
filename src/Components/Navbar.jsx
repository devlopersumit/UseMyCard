import { useState } from "react";
import "./CSS/Navbar.css"
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import logo from "../assets/Updated-UseMyCard.png";

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="UseMyCard" />
        <h1>UseMy<span>Card</span></h1>
      </div>
      
      <div className="btns">
        <button 
          className="login-btn"
          onClick={() => setIsLoginModalOpen(true)}
        >
          Login
        </button>
        <button 
          className="signup-btn"
          onClick={() => setIsSignUpModalOpen(true)}
        >
          Signup
        </button>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </div>
  );
}

export default Navbar;
