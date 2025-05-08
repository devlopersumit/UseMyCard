import React from 'react';
import './CSS/Footer.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import logo from "../assets/Updated-UseMyCard.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logo} alt="UseMyCard Logo" />
                        <h3>UseMyCard</h3>
                    </div>
                    <p>Making credit card management simple and efficient.</p>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#security">Security</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sumit-jha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href=" https://x.com/_sumitjha_?t=4nSWLPjfWOEhS06PoX9-Lg&s=09" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com/The-Boring-Education/byi-cohort-1-devlopersumit" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} UseMyCard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 