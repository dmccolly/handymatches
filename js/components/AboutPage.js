// AboutPage Component
        function AboutPage({ onNavigate }) {
            return (
                <div className="min-h-screen bg-white">
                    <Navigation onNavigate={onNavigate} currentPage="about" />
                    <div className="max-w-4xl mx-auto px-4 py-12">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">About Us</h1>
                            <div className="text-8xl mb-8">👥</div>
                        </div>
                        <div className="prose max-w-none">
                            <h2 className="text-3xl font-bold mb-4">Building Community One Helping Hand at a Time.</h2>
                            <p className="text-gray-700 text-lg mb-6">HandyMatches.com is a non-profit platform connecting skilled volunteers with neighbors who need a hand.</p>
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-gray-700">To foster stronger, more connected neighborhoods by providing a simple and safe platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.AboutPage = AboutPage;
}
