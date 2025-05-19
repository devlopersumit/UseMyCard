import logo from "../assets/Updated-UseMyCard.png";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/80  shadow-sm fixed top-0 left-0 right-0 z-[1000] font-['Poppins',sans-serif] text-[#373743] w-full">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center no-underline text-[#2563eb] text-2xl md:text-3xl font-bold">
                    <img src={logo} alt="UseMyCard" className="h-[40px] w-auto mr-2 transition-transform duration-300 ease-in-out hover:scale-105 md:h-[45px]" />
                    <h1 className="font-bold text-2xl md:text-3xl flex items-center">
                        UseMy<span className="text-[#907CE2]">Card</span>
                    </h1>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <a href="#features" className="text-gray-600 hover:text-[#907CE2] transition-colors">Features</a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-[#907CE2] transition-colors">How it Works</a>
                    <a href="#pricing" className="text-gray-600 hover:text-[#907CE2] transition-colors">FAQ</a>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full font-semibold text-[#907CE2] bg-transparent border-2 border-[#907CE2] hover:bg-[#907CE2] hover:text-white transition-all duration-300 text-[0.95rem] tracking-wide">Login</button>
                        <button className="px-6 py-2 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 text-[0.95rem] tracking-wide shadow-lg hover:shadow-xl">Sign Up</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <a href="#features" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">How it Works</a>
                        <a href="#faq" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">FAQ</a>
                        <div className="flex flex-col gap-3 pt-2">
                            <button className="w-full py-2 rounded-full font-semibold text-[#907CE2] bg-transparent border-2 border-[#907CE2] hover:bg-[#907CE2] hover:text-white transition-all duration-300">Login</button>
                            <button className="w-full py-2 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 shadow-lg">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 