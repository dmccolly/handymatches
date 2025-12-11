// AdminDashboard Component
        function AdminDashboard({ onNavigate, users, setUsers, settings, setSettings }) {
            const volunteers = users.filter(u => u.role === 'Volunteer');
            const residents = users.filter(u => u.role === 'Resident');
            const pendingUsers = users.filter(u => u.status === 'pending');
            const pendingBGChecks = volunteers.filter(v => v.backgroundCheck === 'not_started' || v.backgroundCheck === 'pending');

            return (
                <div className="min-h-screen bg-white">
                    <Navigation onNavigate={onNavigate} currentPage="admin-dashboard" />

                    <section className="max-w-7xl mx-auto px-4 py-16">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-2">🔐 Admin Dashboard</h1>
                            <p className="text-gray-600">Complete platform management and oversight</p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <i className="fas fa-users text-3xl opacity-80"></i>
                                    <span className="text-2xl font-bold">{users.length}</span>
                                </div>
                                <h3 className="text-lg font-semibold">Total Users</h3>
                                <p className="text-sm opacity-90">{volunteers.length} volunteers • {residents.length} residents</p>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <i className="fas fa-clock text-3xl opacity-80"></i>
                                    <span className="text-2xl font-bold">{pendingUsers.length}</span>
                                </div>
                                <h3 className="text-lg font-semibold">Pending Approval</h3>
                                <p className="text-sm opacity-90">Users awaiting review</p>
                            </div>

                            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <i className="fas fa-shield-alt text-3xl opacity-80"></i>
                                    <span className="text-2xl font-bold">{pendingBGChecks.length}</span>
                                </div>
                                <h3 className="text-lg font-semibold">Background Checks</h3>
                                <p className="text-sm opacity-90">Pending or not started</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <i className="fas fa-check-circle text-3xl opacity-80"></i>
                                    <span className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</span>
                                </div>
                                <h3 className="text-lg font-semibold">Active Users</h3>
                                <p className="text-sm opacity-90">Fully approved</p>
                            </div>
                        </div>

                        {/* Admin Tools Grid */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-6">Admin Tools</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <button onClick={() => onNavigate('admin-users')} className="bg-white border-2 border-purple-200 hover:border-purple-500 hover:shadow-lg rounded-2xl p-6 text-left transition group">
                                    <div className="w-14 h-14 bg-purple-100 group-hover:bg-purple-500 rounded-xl flex items-center justify-center mb-4 transition">
                                        <i className="fas fa-users text-2xl text-purple-600 group-hover:text-white transition"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">User Management</h3>
                                    <p className="text-gray-600 text-sm mb-3">Add, approve, edit users and initiate background checks</p>
                                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                                        Manage Users <i className="fas fa-arrow-right ml-2"></i>
                                    </div>
                                </button>

                                <button onClick={() => onNavigate('admin-comms')} className="bg-white border-2 border-blue-200 hover:border-blue-500 hover:shadow-lg rounded-2xl p-6 text-left transition group">
                                    <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-500 rounded-xl flex items-center justify-center mb-4 transition">
                                        <i className="fas fa-comment-dots text-2xl text-blue-600 group-hover:text-white transition"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Communications</h3>
                                    <p className="text-gray-600 text-sm mb-3">Send broadcast messages to users and groups</p>
                                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                                        Send Messages <i className="fas fa-arrow-right ml-2"></i>
                                    </div>
                                </button>

                                <button onClick={() => onNavigate('admin-analytics')} className="bg-white border-2 border-green-200 hover:border-green-500 hover:shadow-lg rounded-2xl p-6 text-left transition group">
                                    <div className="w-14 h-14 bg-green-100 group-hover:bg-green-500 rounded-xl flex items-center justify-center mb-4 transition">
                                        <i className="fas fa-chart-bar text-2xl text-green-600 group-hover:text-white transition"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Analytics</h3>
                                    <p className="text-gray-600 text-sm mb-3">View platform metrics, reports and insights</p>
                                    <div className="flex items-center text-green-600 font-semibold text-sm">
                                        View Reports <i className="fas fa-arrow-right ml-2"></i>
                                    </div>
                                </button>

                                <button onClick={() => onNavigate('team-chat')} className="bg-white border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg rounded-2xl p-6 text-left transition group">
                                    <div className="w-14 h-14 bg-indigo-100 group-hover:bg-indigo-500 rounded-xl flex items-center justify-center mb-4 transition">
                                        <i className="fas fa-comments text-2xl text-indigo-600 group-hover:text-white transition"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Team Chat</h3>
                                    <p className="text-gray-600 text-sm mb-3">Internal team communication and collaboration</p>
                                    <div className="flex items-center text-indigo-600 font-semibold text-sm">
                                        Open Chat <i className="fas fa-arrow-right ml-2"></i>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <button onClick={() => onNavigate('volunteer-dashboard')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 text-left">
                                    <i className="fas fa-clipboard-list text-xl text-blue-600 mb-2"></i>
                                    <div className="font-semibold">View Volunteer Dashboard</div>
                                    <p className="text-sm text-gray-600">Test volunteer experience</p>
                                </button>
                                <button onClick={() => onNavigate('resident-dashboard')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 text-left">
                                    <i className="fas fa-home text-xl text-green-600 mb-2"></i>
                                    <div className="font-semibold">View Resident Dashboard</div>
                                    <p className="text-sm text-gray-600">Test resident experience</p>
                                </button>
                                <button onClick={() => onNavigate('gallery')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 text-left">
                                    <i className="fas fa-images text-xl text-purple-600 mb-2"></i>
                                    <div className="font-semibold">Manage Gallery</div>
                                    <p className="text-sm text-gray-600">Review uploaded photos</p>
                                </button>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        {pendingUsers.length > 0 && (
                            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-exclamation-triangle text-yellow-600 text-2xl mr-3"></i>
                                    <div>
                                        <h3 className="font-bold text-lg">Action Required</h3>
                                        <p className="text-gray-600">You have {pendingUsers.length} user(s) pending approval</p>
                                    </div>
                                </div>
                                <button onClick={() => onNavigate('admin-users')} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold">
                                    Review Pending Users
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.AdminDashboard = AdminDashboard;
}
