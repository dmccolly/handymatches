// VolunteerDashboard Component
        function VolunteerDashboard({ onNavigate }) {
            const [tab, setTab] = useState('dashboard');
            const [showPhotoUpload, setShowPhotoUpload] = useState(false);
            const [showCalendar, setShowCalendar] = useState(false);

            return (
                <div className="min-h-screen bg-gray-50">
                    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
                        <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                            <button onClick={() => onNavigate('landing')} className="text-white">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>
                            <h1 className="text-xl font-bold">Dashboard</h1>
                            <i className="fas fa-cog text-xl"></i>
                        </div>

                        <div className="p-4 pb-24">
                            {tab === 'dashboard' && (
                                <>
                                    <h2 className="text-2xl font-bold mb-2">Welcome, Dan!</h2>
                                    <p className="text-gray-600 mb-6">Ready to make a difference today?</p>

                                    <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 text-white mb-6">
                                        <span className="bg-blue-500 px-3 py-1 rounded-full text-xs mb-3 inline-block">
                                            <i className="fas fa-map-marker-alt mr-1"></i> 2.3 miles away
                                        </span>
                                        <h4 className="text-xl font-bold mb-2">Leaky Faucet Repair</h4>
                                        <p className="text-sm mb-1">For Maria Garcia</p>
                                        <p className="text-sm mb-4">Oct 26, 2:00 PM - 123 Main St</p>
                                        <div className="flex gap-2">
                                            <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold flex-1">
                                                <i className="fas fa-share-alt mr-2"></i>Share
                                            </button>
                                            <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold flex-1">
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="font-semibold">My Availability</h3>
                                            <button onClick={() => setShowCalendar(true)} className="text-blue-600 text-sm">
                                                <i className="fas fa-calendar-alt mr-1"></i>Manage
                                            </button>
                                        </div>
                                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">Recurring Weekly</span>
                                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
                                            </div>
                                            <p className="text-sm text-gray-600">Mon, Wed, Fri • 9 AM - 5 PM</p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="font-semibold">Upload Project Photos</h3>
                                            <button onClick={() => setShowPhotoUpload(true)} className="text-blue-600 text-sm">
                                                <i className="fas fa-camera mr-1"></i>Upload
                                            </button>
                                        </div>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500" onClick={() => setShowPhotoUpload(true)}>
                                            <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                                            <p className="text-gray-600 text-sm">Tap to upload completed project photos</p>
                                        </div>
                                    </div>

                                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                                        <div className="flex items-center mb-2">
                                            <i className="fas fa-trophy text-orange-500 text-2xl mr-3"></i>
                                            <div>
                                                <h4 className="font-semibold">18 Tasks Completed</h4>
                                                <p className="text-sm text-gray-600">You're making a real impact!</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around py-3">
                            {[['dashboard', 'th-large', 'Dashboard'], ['jobs', 'wrench', 'My Jobs'], ['messages', 'comment-dots', 'Messages'], ['profile', 'user', 'Profile']].map(([name, icon, label]) => (
                                <button key={name} onClick={() => setTab(name)} className={`flex flex-col items-center ${tab === name ? 'text-blue-600' : 'text-gray-600'}`}>
                                    <i className={`fas fa-${icon} text-xl mb-1`}></i>
                                    <span className="text-xs">{label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Photo Upload Modal */}
                        {showPhotoUpload && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowPhotoUpload(false)}>
                                <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                                    <h3 className="text-xl font-bold mb-4">Upload Project Photos</h3>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                                        <i className="fas fa-camera text-5xl text-gray-400 mb-3"></i>
                                        <p className="text-gray-600 mb-2">Click to select photos</p>
                                        <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                    <textarea placeholder="Add a description..." rows="3" className="w-full px-4 py-3 border rounded-lg mb-4"></textarea>
                                    <label className="flex items-center mb-4">
                                        <input type="checkbox" className="mr-2" defaultChecked />
                                        <span className="text-sm">I give permission to display in the Community Gallery</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setShowPhotoUpload(false)} className="flex-1 bg-gray-200 py-3 rounded-lg">Cancel</button>
                                        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg">Upload</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Calendar Modal */}
                        {showCalendar && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowCalendar(false)}>
                                <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
                                    <h3 className="text-xl font-bold mb-4">Manage Availability</h3>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Set Recurring Weekly</label>
                                        <select className="w-full px-4 py-3 border rounded-lg mb-2">
                                            <option>Monday - Friday</option>
                                            <option>Weekends Only</option>
                                            <option>Custom Schedule</option>
                                        </select>
                                        <div className="flex gap-2">
                                            <input type="time" defaultValue="09:00" className="flex-1 px-4 py-3 border rounded-lg" />
                                            <input type="time" defaultValue="17:00" className="flex-1 px-4 py-3 border rounded-lg" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Block Out Dates</label>
                                        <input type="date" className="w-full px-4 py-3 border rounded-lg mb-2" />
                                        <button className="text-blue-600 text-sm">
                                            <i className="fas fa-plus mr-1"></i>Add Another Date
                                        </button>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => setShowCalendar(false)} className="flex-1 bg-gray-200 py-3 rounded-lg">Cancel</button>
                                        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.VolunteerDashboard = VolunteerDashboard;
}
