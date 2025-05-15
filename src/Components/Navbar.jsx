import logo from "../assets/Updated-UseMyCard.png";

function Navbar() {
    return (
        <nav className="bg-white shadow fixed top-0 left-0 right-0 z-[1000] font-['Poppins',sans-serif] text-[#373743] w-full">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center no-underline text-[#2563eb] text-2xl md:text-3xl font-bold">
                    <img src={logo} alt="UseMyCard" className="h-[40px] w-auto mr-2 transition-transform duration-300 ease-in-out hover:scale-105 md:h-[45px]" />
                    <h1 className="font-bold text-2xl md:text-3xl flex items-center">
                        UseMy<span className="text-[#1e40af]">Card</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-2 rounded-full font-semibold text-white bg-[#2563eb] border-none shadow-[0_4px_12px_rgba(0,123,255,0.2)] text-[0.95rem] font-bold tracking-wide transition-all duration-300 hover:bg-[#907CE2] hover:text-white">Login</button>
                    <button className="px-8 py-2 rounded-full font-semibold text-white bg-[#907CE2] border-none shadow-[0_4px_12px_rgba(0,123,255,0.2)] text-[0.95rem] font-bold tracking-wide transition-all duration-300 hover:bg-[#1d4ed8] hover:border-[#1d4ed8]">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar; 