// AdminUserManagement Component
        function AdminUserManagement({ onNavigate, users, setUsers, settings, setSettings }) {
            const [searchTerm, setSearchTerm] = useState('');
            const [filterTab, setFilterTab] = useState('all');
            const [selectedUser, setSelectedUser] = useState(null);
            const [showAddUser, setShowAddUser] = useState(false);
            const [showSettings, setShowSettings] = useState(false);

            const filteredUsers = users.filter(user => {
                const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                     user.email.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilter = filterTab === 'all' || 
                                     (filterTab === 'pending' && user.status === 'pending') ||
                                     (filterTab === 'volunteers' && user.role === 'Volunteer') ||
                                     (filterTab === 'residents' && user.role === 'Resident');
                return matchesSearch && matchesFilter;
            });

            const approveUser = (userId) => {
                setUsers(users.map(u => u.id === userId ? {...u, status: 'active'} : u));
                setSelectedUser(null);
                alert('User approved successfully!');
            };

            const initiateBackgroundCheck = (userId) => {
                setUsers(users.map(u => u.id === userId ? {...u, backgroundCheck: 'pending'} : u));
                alert('Background check initiated. You will be notified when complete.');
            };

            const completeBackgroundCheck = (userId, passed) => {
                setUsers(users.map(u => u.id === userId ? {...u, backgroundCheck: passed ? 'completed' : 'failed'} : u));
                alert(`Background check marked as ${passed ? 'passed' : 'failed'}.`);
            };

            const deactivateUser = (userId) => {
                if (confirm('Are you sure you want to deactivate this user?')) {
                    setUsers(users.map(u => u.id === userId ? {...u, status: 'inactive'} : u));
                    setSelectedUser(null);
                }
            };

            const deleteUser = (userId) => {
                if (confirm('Are you sure you want to permanently delete this user?')) {
                    setUsers(users.filter(u => u.id !== userId));
                    setSelectedUser(null);
                }
            };

            return (
                <div className="min-h-screen bg-gray-900">
                    <div className="max-w-6xl mx-auto bg-gray-900 min-h-screen">
                        <div className="bg-gray-800 p-4 flex items-center sticky top-0 z-50">
                            <button onClick={() => onNavigate('landing')} className="text-white mr-4">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>
                            <h1 className="text-xl font-bold text-white flex-1">User Management</h1>
                            <button onClick={() => setShowSettings(true)} className="text-white mr-4">
                                <i className="fas fa-cog text-xl"></i>
                            </button>
                            <button onClick={() => setShowAddUser(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                                <i className="fas fa-user-plus mr-2"></i>Add User
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="relative mb-4">
                                <input 
                                    type="text" 
                                    placeholder="Search by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg border border-gray-700"
                                />
                                <i className="fas fa-search absolute left-3 top-4 text-gray-500"></i>
                            </div>

                            <div className="flex gap-2 mb-4 overflow-x-auto">
                                {[['all', 'All Users'], ['pending', 'Pending Approval'], ['volunteers', 'Volunteers'], ['residents', 'Residents']].map(([key, label]) => (
                                    <button 
                                        key={key}
                                        onClick={() => setFilterTab(key)} 
                                        className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${filterTab === key ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <div className="bg-gray-800 rounded-lg p-2 mb-4 text-white text-sm">
                                <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                                {filteredUsers.filter(u => u.status === 'pending').length} users pending approval • 
                                {filteredUsers.filter(u => u.backgroundCheck === 'not_started').length} background checks needed
                            </div>

                            <div className="space-y-2">
                                {filteredUsers.map((user) => (
                                    <div key={user.id} className="bg-gray-800 rounded-lg p-4 flex items-center hover:bg-gray-750 cursor-pointer" onClick={() => setSelectedUser(user)}>
                                        <div className="text-3xl mr-4">{user.avatar}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-semibold">{user.name}</h3>
                                                <span className={`status-${user.status}`}>{user.status}</span>
                                                {user.role === 'Volunteer' && (
                                                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                                        BG: {user.backgroundCheck}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-400 text-sm">{user.email} • {user.role}</p>
                                            {user.skills && user.skills.length > 0 && (
                                                <div className="flex gap-1 mt-1">
                                                    {user.skills.slice(0, 3).map((skill, i) => (
                                                        <span key={i} className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">{skill}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <button className="text-gray-400 hover:text-white">
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* User Detail Modal */}
                        {selectedUser && (
                            <div className="fixed inset-0 modal-overlay flex items-center justify-center p-4 z-50" onClick={() => setSelectedUser(null)}>
                                <div className="bg-gray-800 rounded-2xl max-w-2xl w-full p-6 text-white" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center">
                                            <div className="text-5xl mr-4">{selectedUser.avatar}</div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                                                <p className="text-gray-400">{selectedUser.email}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => setSelectedUser(null)} className="text-gray-400 hover:text-white">
                                            <i className="fas fa-times text-2xl"></i>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <div className="text-gray-400 text-sm mb-1">Role</div>
                                            <div className="font-semibold">{selectedUser.role}</div>
                                        </div>
                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <div className="text-gray-400 text-sm mb-1">Status</div>
                                            <span className={`status-${selectedUser.status}`}>{selectedUser.status}</span>
                                        </div>
                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <div className="text-gray-400 text-sm mb-1">Join Date</div>
                                            <div className="font-semibold">{selectedUser.joinDate}</div>
                                        </div>
                                        {selectedUser.role === 'Volunteer' && (
                                            <>
                                                <div className="bg-gray-700 rounded-lg p-4">
                                                    <div className="text-gray-400 text-sm mb-1">Background Check</div>
                                                    <div className="font-semibold">{selectedUser.backgroundCheck}</div>
                                                </div>
                                                <div className="bg-gray-700 rounded-lg p-4 col-span-2">
                                                    <div className="text-gray-400 text-sm mb-2">Skills</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedUser.skills && selectedUser.skills.map((skill, i) => (
                                                            <span key={i} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="space-y-3">
                                        {selectedUser.status === 'pending' && (
                                            <button onClick={() => approveUser(selectedUser.id)} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
                                                <i className="fas fa-check mr-2"></i>Approve User
                                            </button>
                                        )}

                                        {selectedUser.role === 'Volunteer' && selectedUser.backgroundCheck === 'not_started' && (
                                            <button onClick={() => initiateBackgroundCheck(selectedUser.id)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                                                <i className="fas fa-search mr-2"></i>Initiate Background Check
                                            </button>
                                        )}

                                        {selectedUser.role === 'Volunteer' && selectedUser.backgroundCheck === 'pending' && (
                                            <div className="flex gap-2">
                                                <button onClick={() => completeBackgroundCheck(selectedUser.id, true)} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
                                                    <i className="fas fa-check mr-2"></i>Passed
                                                </button>
                                                <button onClick={() => completeBackgroundCheck(selectedUser.id, false)} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold">
                                                    <i className="fas fa-times mr-2"></i>Failed
                                                </button>
                                            </div>
                                        )}

                                        <button onClick={() => deactivateUser(selectedUser.id)} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold">
                                            <i className="fas fa-ban mr-2"></i>Deactivate User
                                        </button>

                                        <button onClick={() => deleteUser(selectedUser.id)} className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold">
                                            <i className="fas fa-trash mr-2"></i>Delete User Permanently
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Settings Modal */}
                        {showSettings && (
                            <div className="fixed inset-0 modal-overlay flex items-center justify-center p-4 z-50" onClick={() => setShowSettings(false)}>
                                <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 text-white" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-bold">Settings</h2>
                                        <button onClick={() => setShowSettings(false)}>
                                            <i className="fas fa-times text-xl"></i>
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <div>
                                                    <h3 className="font-semibold">Auto-Approve Gallery Photos</h3>
                                                    <p className="text-sm text-gray-400">Photos are automatically approved for gallery</p>
                                                </div>
                                                <label className="relative inline-block w-12 h-6">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={settings.autoApprovePhotos}
                                                        onChange={(e) => setSettings({...settings, autoApprovePhotos: e.target.checked})}
                                                        className="sr-only peer"
                                                    />
                                                    <span className="absolute inset-0 bg-gray-600 rounded-full peer-checked:bg-green-600 transition"></span>
                                                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="bg-gray-700 rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <div>
                                                    <h3 className="font-semibold">Require Background Checks</h3>
                                                    <p className="text-sm text-gray-400">All volunteers must complete background check</p>
                                                </div>
                                                <label className="relative inline-block w-12 h-6">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={settings.requireBackgroundCheck}
                                                        onChange={(e) => setSettings({...settings, requireBackgroundCheck: e.target.checked})}
                                                        className="sr-only peer"
                                                    />
                                                    <span className="absolute inset-0 bg-gray-600 rounded-full peer-checked:bg-green-600 transition"></span>
                                                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => setShowSettings(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-6">
                                        Save Settings
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Add User Modal */}
                        {showAddUser && (
                            <div className="fixed inset-0 modal-overlay flex items-center justify-center p-4 z-50" onClick={() => setShowAddUser(false)}>
                                <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 text-white" onClick={(e) => e.stopPropagation()}>
                                    <h2 className="text-2xl font-bold mb-6">Add New User</h2>
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg" />
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg" />
                                        <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg">
                                            <option>Select Role</option>
                                            <option>Volunteer</option>
                                            <option>Resident</option>
                                            <option>Admin</option>
                                        </select>
                                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
                                            Add User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.AdminUserManagement = AdminUserManagement;
}
