// AdminAnalytics Component
        function AdminAnalytics({ onNavigate, users }) {
            const volunteers = users.filter(u => u.role === 'Volunteer');
            const residents = users.filter(u => u.role === 'Resident');
            const activeUsers = users.filter(u => u.status === 'active');
            const pendingUsers = users.filter(u => u.status === 'pending');

            return (
                <div className="min-h-screen bg-gray-900">
                    <div className="max-w-6xl mx-auto bg-gray-900 min-h-screen">
                        <div className="bg-gray-800 p-4 flex items-center">
                            <button onClick={() => onNavigate('landing')} className="text-white mr-4">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>
                            <h1 className="text-xl font-bold text-white flex-1">Reporting & Analytics</h1>
                        </div>

                        <div className="p-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="text-gray-400 text-sm mb-1">Total Users</div>
                                    <div className="text-white text-3xl font-bold">{users.length}</div>
                                    <div className="text-green-500 text-xs mt-1">Active Platform</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="text-gray-400 text-sm mb-1">Volunteers</div>
                                    <div className="text-white text-3xl font-bold">{volunteers.length}</div>
                                    <div className="text-blue-500 text-xs mt-1">{volunteers.filter(v => v.status === 'active').length} Active</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="text-gray-400 text-sm mb-1">Residents</div>
                                    <div className="text-white text-3xl font-bold">{residents.length}</div>
                                    <div className="text-purple-500 text-xs mt-1">{residents.filter(r => r.status === 'active').length} Active</div>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <div className="text-gray-400 text-sm mb-1">Pending Approval</div>
                                    <div className="text-white text-3xl font-bold">{pendingUsers.length}</div>
                                    <div className="text-yellow-500 text-xs mt-1">Needs Review</div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6 mb-6">
                                <h3 className="text-white font-semibold text-lg mb-4">Background Check Status</h3>
                                <div className="space-y-3">
                                    {[
                                        ['Completed', volunteers.filter(v => v.backgroundCheck === 'completed').length, 'green'],
                                        ['Pending', volunteers.filter(v => v.backgroundCheck === 'pending').length, 'yellow'],
                                        ['Not Started', volunteers.filter(v => v.backgroundCheck === 'not_started').length, 'red']
                                    ].map(([label, count, color]) => (
                                        <div key={label}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-300">{label}</span>
                                                <span className="text-white font-semibold">{count}</span>
                                            </div>
                                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div className={`h-full bg-${color}-500`} style={{width: `${(count/volunteers.length)*100}%`}}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-white font-semibold text-lg mb-4">User Activity</h3>
                                <div className="space-y-4">
                                    {users.slice(0, 5).map((user) => (
                                        <div key={user.id} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-2xl mr-3">{user.avatar}</div>
                                                <div>
                                                    <div className="text-white font-semibold text-sm">{user.name}</div>
                                                    <div className="text-gray-400 text-xs">{user.role} • {user.status}</div>
                                                </div>
                                            </div>
                                            <span className={`status-${user.status}`}>{user.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.AdminAnalytics = AdminAnalytics;
}
