// Navigation Component
function Navigation({ onNavigate, currentPage }) {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div 
                        onClick={() => onNavigate('landing')} 
                        className="text-2xl font-bold text-orange-500 cursor-pointer hover:text-orange-600 transition"
                    >
                        HandyMatches
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a 
                            onClick={() => onNavigate('landing')} 
                            className={`nav-link ${currentPage === 'landing' ? 'nav-link-active' : ''}`}
                        >
                            Home
                        </a>
                        <a 
                            onClick={() => onNavigate('about')} 
                            className={`nav-link ${currentPage === 'about' ? 'nav-link-active' : ''}`}
                        >
                            About Us
                        </a>
                        <a 
                            onClick={() => onNavigate('gallery')} 
                            className={`nav-link ${currentPage === 'gallery' ? 'nav-link-active' : ''}`}
                        >
                            Gallery
                        </a>
                        <a 
                            onClick={() => onNavigate('contact')} 
                            className={`nav-link ${currentPage === 'contact' ? 'nav-link-active' : ''}`}
                        >
                            Contact
                        </a>
                        <a 
                            onClick={() => onNavigate('donate')} 
                            className={`nav-link ${currentPage === 'donate' ? 'nav-link-active' : ''}`}
                        >
                            Donate
                        </a>
                        <a 
                            onClick={() => onNavigate('admin-dashboard')} 
                            className={`nav-link ${currentPage === 'admin-dashboard' ? 'nav-link-active' : ''}`}
                        >
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

// Make available globally
if (typeof window !== 'undefined') {
    window.Navigation = Navigation;
}
