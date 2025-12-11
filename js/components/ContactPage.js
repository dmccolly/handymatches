// ContactPage Component
        function ContactPage({ onNavigate }) {
            return (
                <div className="min-h-screen bg-white">
                    <Navigation onNavigate={onNavigate} currentPage="contact" />
                    <div className="max-w-2xl mx-auto px-4 py-12">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                            <p className="text-xl text-gray-600">Have a question or need support? We'd love to hear from you.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="space-y-6">
                                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg" />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg" />
                                <textarea placeholder="Your message..." rows="6" className="w-full px-4 py-3 border rounded-lg"></textarea>
                                <button className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.ContactPage = ContactPage;
}
