// Navigation Component
        function Navigation({ onNavigate, currentPage }) {
            return (
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex justify-between items-center">
                            <div onClick={() => onNavigate('landing')} className="text-2xl font-bold text-orange-500 cursor-pointer">HandyMatches</div>
                            <nav className="hidden md:flex space-x-8">
                                <a onClick={() => onNavigate('landing')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'landing' ? 'text-orange-500 font-semibold' : ''}`}>Home</a>
                                <a onClick={() => onNavigate('about')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'about' ? 'text-orange-500 font-semibold' : ''}`}>About Us</a>
                                <a onClick={() => onNavigate('gallery')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'gallery' ? 'text-orange-500 font-semibold' : ''}`}>Gallery</a>
                                <a onClick={() => onNavigate('contact')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'contact' ? 'text-orange-500 font-semibold' : ''}`}>Contact</a>
                                <a onClick={() => onNavigate('donate')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'donate' ? 'text-orange-500 font-semibold' : ''}`}>Donate</a>
                                <a onClick={() => onNavigate('admin-dashboard')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'admin-dashboard' ? 'text-orange-500 font-semibold' : ''}`}>
                                    <i className="fas fa-lock mr-1"></i>Admin
                                </a>
                            </nav>
                            <button className="md:hidden">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </header>
            );
        }

if (typeof window !== 'undefined') {
    window.Navigation = Navigation;
}
