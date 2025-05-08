import React, { useState } from 'react';
import './CSS/FAQ.css';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What is UseMyCard?",
            answer: "UseMyCard is a platform that helps you manage and optimize your credit card usage, track rewards, and make informed financial decisions."
        },
        {
            question: "How does UseMyCard work?",
            answer: "UseMyCard provides tools to track your credit card spending, analyze rewards, and suggest the best cards for different types of purchases."
        },
        {
            question: "Is my financial data secure?",
            answer: "Yes, we take security seriously. All your data is encrypted and we never store your actual credit card numbers."
        },
        {
            question: "What features are included?",
            answer: "Our platform includes expense tracking, reward optimization, spending analytics, and personalized card recommendations."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Yes, UseMyCard is available on both iOS and Android platforms, allowing you to manage your cards on the go."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="faq-content">
                <h2>Frequently Asked <span>Questions</span></h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <FaChevronDown className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ; 