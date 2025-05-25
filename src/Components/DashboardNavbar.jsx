import logo from "../assets/Updated-UseMyCard.png";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

function DashboardNavbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    async function handleLogout() {
        await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-[1000] font-['Poppins',sans-serif] text-[#373743] w-full">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/dashboard" className="flex items-center no-underline text-[#2563eb] text-2xl md:text-3xl font-bold">
                <div className="flex items-center no-underline text-[#2563eb] text-2xl md:text-3xl font-bold">
                    <img src={logo} alt="UseMyCard" className="h-[40px] w-auto mr-2 transition-transform duration-300 ease-in-out hover:scale-105 md:h-[45px]" />
                    <h1 className="font-bold text-2xl md:text-3xl flex items-center">
                        UseMy<span className="text-[#907CE2]">Card</span>
                    </h1>
                </div>
                </Link>

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
                    <Link to="/dashboard" className="text-gray-600 hover:text-[#907CE2] transition-colors">Dashboard</Link>
                    <Link to="/my-cards" className="text-gray-600 hover:text-[#907CE2] transition-colors">My Cards</Link>
                    <Link to="/usage-logs" className="text-gray-600 hover:text-[#907CE2] transition-colors">Usage Logs</Link>
                    <Link to="/add-card" className="text-gray-600 hover:text-[#907CE2] transition-colors">Add Card</Link>
                    <button 
                        onClick={handleLogout} 
                        className="px-5 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-2 space-y-1">
                        <Link 
                            to="/dashboard" 
                            className="block py-2 px-4 text-gray-600 hover:text-[#907CE2] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                        <Link 
                            to="/my-cards" 
                            className="block py-2 px-4 text-gray-600 hover:text-[#907CE2] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            My Cards
                        </Link>
                        <Link 
                            to="/usage-logs" 
                            className="block py-2 px-4 text-gray-600 hover:text-[#907CE2] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Usage Logs
                        </Link>
                        <Link 
                            to="/add-card" 
                            className="block py-2 px-4 text-gray-600 hover:text-[#907CE2] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Add Card
                        </Link>
                        <button 
                            onClick={() => {
                                handleLogout();
                                setIsMenuOpen(false);
                            }}
                            className="w-full text-left py-2 px-4 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default DashboardNavbar; 