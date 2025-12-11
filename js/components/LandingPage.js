function LandingPage({ onNavigate }) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation onNavigate={onNavigate} currentPage="landing" />

            <section className="max-w-7xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="text-8xl mb-8">🤝</div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Neighbors Helping Neighbors.</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Connecting local volunteers with residents who need a hand with everyday tasks.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button 
                            onClick={() => onNavigate('resident-request')} 
                            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            I Need Help
                        </button>
                        <button 
                            onClick={() => onNavigate('volunteer-signup')} 
                            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            I Want to Volunteer
                        </button>
                    </div>
                </div>

                {/* Impact Photo Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Our Impact</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="image-container bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">🧑‍🔧</div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                                <h3 className="text-white font-bold text-lg mb-1">Volunteers in Action</h3>
                                <p className="text-white/90 text-sm">Skilled neighbors helping with repairs</p>
                            </div>
                        </div>
                        <div className="image-container bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">👵🏡</div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                                <h3 className="text-white font-bold text-lg mb-1">Residents Receiving Help</h3>
                                <p className="text-white/90 text-sm">Seniors staying independent at home</p>
                            </div>
                        </div>
                        <div className="image-container bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-6xl">🌻🌳</div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                                <h3 className="text-white font-bold text-lg mb-1">Community Projects</h3>
                                <p className="text-white/90 text-sm">Beautiful gardens and outdoor spaces</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button 
                            onClick={() => onNavigate('gallery')} 
                            className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center"
                        >
                            View Full Gallery <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-12 mb-20 text-center">
                    <div className="text-5xl mb-6">🧡</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        At HandyMatches, we believe in the power of community. Our mission is to foster 
                        stronger, more connected neighborhoods by providing a simple and safe platform 
                        where residents can find volunteer assistance for everyday tasks, ensuring everyone 
                        has the support they need to thrive.
                    </p>
                </div>

                {/* What We Do Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            HandyMatches is a non-profit platform that brings neighbors together. We connect 
                            skilled volunteers with community members who need assistance with everyday tasks 
                            like home repairs, gardening, pet care, and more.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Every day, our volunteers help elderly neighbors fix leaky faucets, assist families 
                            with yard work, walk dogs for busy professionals, and provide countless other services 
                            that make our communities stronger and more caring.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Whether you're looking for help or want to give back to your community, HandyMatches 
                            makes it easy, safe, and rewarding to connect with your neighbors.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">👥</span>
                            </div>
                            <h3 className="font-bold text-2xl mb-3">Community</h3>
                            <p className="text-gray-600">Building stronger neighborhoods through mutual support</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">🛡️</span>
                            </div>
                            <h3 className="font-bold text-2xl mb-3">Trust</h3>
                            <p className="text-gray-600">Verified volunteers and safe, reliable assistance</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">💙</span>
                            </div>
                            <h3 className="font-bold text-2xl mb-3">Empathy</h3>
                            <p className="text-gray-600">Compassionate care for every community member</p>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mb-20 bg-gray-50 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">Getting help or volunteering is simple</p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
                            <h3 className="font-bold text-xl mb-3">Post a Task</h3>
                            <p className="text-gray-600">Tell us what you need help with</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
                            <h3 className="font-bold text-xl mb-3">Get Matched</h3>
                            <p className="text-gray-600">We connect you with qualified volunteers</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
                            <h3 className="font-bold text-xl mb-3">Get Help</h3>
                            <p className="text-gray-600">Your neighbor lends a hand</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-xl mb-8 opacity-90">Join our community of neighbors helping neighbors today</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => onNavigate('volunteer-signup')} 
                            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Become a Volunteer
                        </button>
                        <button 
                            onClick={() => onNavigate('resident-request')} 
                            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Request Help
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-4">HandyMatches</div>
                    <div className="flex justify-center space-x-6 mb-4">
                        <a onClick={() => onNavigate('about')} className="cursor-pointer hover:text-orange-500">About Us</a>
                        <a onClick={() => onNavigate('contact')} className="cursor-pointer hover:text-orange-500">Contact</a>
                        <a onClick={() => onNavigate('donate')} className="cursor-pointer hover:text-orange-500">Donate</a>
                        <a onClick={() => onNavigate('gallery')} className="cursor-pointer hover:text-orange-500">Gallery</a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <i className="fab fa-facebook text-2xl cursor-pointer hover:text-blue-600"></i>
                        <i className="fab fa-twitter text-2xl cursor-pointer hover:text-blue-400"></i>
                        <i className="fab fa-instagram text-2xl cursor-pointer hover:text-pink-600"></i>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Make available globally
if (typeof window !== 'undefined') {
    window.LandingPage = LandingPage;
}
