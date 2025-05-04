import logo from "../assets/Updated-UseMyCard.png";
import "./CSS/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="UseMyCard" />
        <h1>UseMy<span>Card</span></h1>
      </div>
      
      <div className="btns">
    <button className="login-btn">Login</button>
    <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
