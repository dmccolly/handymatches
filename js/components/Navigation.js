// Navigation Component
function Navigation({ onNavigate, currentPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleNavigation = (page) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div onClick={() => handleNavigation('landing')} className="text-2xl font-bold text-orange-500 cursor-pointer">
                        HandyMatches
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a onClick={() => handleNavigation('landing')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'landing' ? 'text-orange-500 font-semibold' : ''}`}>Home</a>
                        <a onClick={() => handleNavigation('about')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'about' ? 'text-orange-500 font-semibold' : ''}`}>About Us</a>
                        <a onClick={() => handleNavigation('gallery')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'gallery' ? 'text-orange-500 font-semibold' : ''}`}>Gallery</a>
                        <a onClick={() => handleNavigation('contact')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'contact' ? 'text-orange-500 font-semibold' : ''}`}>Contact</a>
                        <a onClick={() => handleNavigation('donate')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'donate' ? 'text-orange-500 font-semibold' : ''}`}>Donate</a>
                        <a onClick={() => handleNavigation('admin-dashboard')} className={`cursor-pointer hover:text-orange-500 ${currentPage === 'admin-dashboard' ? 'text-orange-500 font-semibold' : ''}`}>
                            <i className="fas fa-lock mr-1"></i>Admin
                        </a>
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none mobile-menu-toggle"
                        aria-label="Toggle mobile menu"
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <nav className={`md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 ${mobileMenuOpen ? 'mobile-menu-open' : ''}`} style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
                    <div className="flex flex-col space-y-4">
                        <a onClick={() => handleNavigation('landing')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'landing' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            Home
                        </a>
                        <a onClick={() => handleNavigation('about')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'about' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            About Us
                        </a>
                        <a onClick={() => handleNavigation('gallery')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'gallery' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            Gallery
                        </a>
                        <a onClick={() => handleNavigation('contact')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'contact' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            Contact
                        </a>
                        <a onClick={() => handleNavigation('donate')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'donate' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            Donate
                        </a>
                        <a onClick={() => handleNavigation('admin-dashboard')} className={`cursor-pointer hover:text-orange-500 py-2 ${currentPage === 'admin-dashboard' ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}>
                            <i className="fas fa-lock mr-1"></i>Admin
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

if (typeof window !== 'undefined') {
    window.Navigation = Navigation;
}
