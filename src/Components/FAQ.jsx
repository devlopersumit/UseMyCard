import { useState } from "react";

function FAQ() {

   const faqs = [
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
            answer: "No, UseMyCard is currently not available on playstore or appstore, but will launch soon."
        }
    ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return(
        <div className="w-full min-h-screen bg-[#F0F0FF]  md:pt-[50px] px-4 md:px-8">
         <div className="max-w-[800px] mx-auto" id="faq">
            <h1 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-bold tracking-normal mb-[30px] md:mb-[50px] text-center">Frequently Asked <span className="text-[#907CE2]">Questions</span></h1>
      {faqs.map((faq, index) => (
        <div 
        key={index} 
        className="mb-3 md:mb-4 border rounded shadow-sm text-[14px] md:text-[16px] leading-5 md:leading-6 tracking-normal font-[400] bg-white text-[#1f2937] py-2 md:py-3 hover:scale-[1.001] hover:shadow-xl transition-all duration-400 flex flex-wrap flex-col">
          <div
            className="cursor-pointer p-3 md:p-4 bg-transparent flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            <h3 className="font-medium text-[16px] md:text-[20px] pr-4">{faq.question}</h3>
            <i className={`fa-solid fa-arrow-down text-[#907ce2] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
          </div>

          {openIndex === index && (
            <div className="p-3 md:p-4 bg-white border-t">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    );
}

export default FAQ