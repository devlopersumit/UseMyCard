import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaBars, FaTimes } from 'react-icons/fa'
import './CSS/Navbar.css'
import logo from "../assets/Updated-UseMyCard.png";

export default function Navbar({ onLoginClick, onSignupClick }) {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/cards', label: 'My Cards' },
    { path: '/logs', label: 'Usage Logs' },
    { path: '/add-card', label: 'Add Card' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="UseMyCard" />
          <h1>UseMy<span>Card</span></h1>
        </Link>

        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {user ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={onLoginClick}>
                Login
              </button>
              <button className="signup-btn" onClick={onSignupClick}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
