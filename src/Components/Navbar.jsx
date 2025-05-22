import logo from "../assets/Updated-UseMyCard.png";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [modalType, setModalType] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const closeModal = () => {
        setModalType(null);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
    };


     async function handleAuth(e) {
        // e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Email and Password are required.");
            return;
        }

        if (modalType === "signup" && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            // let result;
            if (modalType === "login") {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            } else {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
            }
            closeModal();
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleGoogleLogin() {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) setError(error.message);
    }


   return (
        <nav className="bg-white/80 shadow-sm fixed top-0 left-0 right-0 z-[1000] font-['Poppins',sans-serif] text-[#373743] w-full">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center no-underline text-[#2563eb] text-2xl md:text-3xl font-bold">
                    <img src={logo} alt="UseMyCard" className="h-[40px] w-auto mr-2 transition-transform duration-300 ease-in-out hover:scale-105 md:h-[45px]" />
                    <h1 className="font-bold text-2xl md:text-3xl flex items-center">
                        UseMy<span className="text-[#907CE2]">Card</span>
                    </h1>
                </div>

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

                <div className="hidden md:flex items-center gap-6">
                    <a href="#features" className="text-gray-600 hover:text-[#907CE2] transition-colors">Features</a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-[#907CE2] transition-colors">How it Works</a>
                    <a href="#pricing" className="text-gray-600 hover:text-[#907CE2] transition-colors">FAQ</a>
                    <div className="flex gap-4">
                        <button onClick={() => setModalType('login')} className="px-6 py-2 rounded-full font-semibold text-[#907CE2] bg-transparent border-2 border-[#907CE2] hover:bg-[#907CE2] hover:text-white transition-all duration-300 text-[0.95rem] tracking-wide">Login</button>
                        <button onClick={() => setModalType('signup')} className="px-6 py-2 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 text-[0.95rem] tracking-wide shadow-lg hover:shadow-xl">Sign Up</button>
                    </div>
                </div>

                <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <a href="#features" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">How it Works</a>
                        <a href="#faq" className="text-gray-600 hover:text-[#907CE2] transition-colors py-2">FAQ</a>
                        <div className="flex flex-col gap-3 pt-2">
                            <button onClick={() => setModalType('login')} className="w-full py-2 rounded-full font-semibold text-[#907CE2] bg-transparent border-2 border-[#907CE2] hover:bg-[#907CE2] hover:text-white transition-all duration-300">Login</button>
                            <button onClick={() => setModalType('signup')} className="w-full py-2 rounded-full font-semibold text-white bg-[#907CE2] hover:bg-[#7B68EE] transition-all duration-300 shadow-lg">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            {modalType && (
                <div className="fixed inset-0 z-[2000] bg-black/30 backdrop-blur-sm flex items-center justify-center max-sm:px-3">
                    <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative transition-all animate-fade-in">
                        <h2 className="text-3xl font-bold mb-6 text-center text-[#373743]">
                            {modalType === 'login' ? 'Welcome Back 👋' : 'Join UseMyCard 🚀'}
                        </h2>

                        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                        <form onSubmit={handleAuth}>
                            <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {modalType === 'signup' && (
                                <input type="password" placeholder="Confirm Password" className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#907CE2]" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            )}

                            <button type="submit" className="w-full mb-5 bg-[#907CE2] hover:bg-[#7B68EE] text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                {modalType === 'login' ? 'Login' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="text-center text-sm text-gray-500 mb-4">or continue with</div>

                        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 bg-[#2563EB] text-white hover:text-black">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            <span>Continue With Google</span>
                        </button>

                        <button onClick={closeModal} className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
