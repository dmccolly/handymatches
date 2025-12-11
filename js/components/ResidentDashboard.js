// ResidentDashboard Component
        function ResidentDashboard({ onNavigate }) {
            const [tab, setTab] = useState('active');
            const tasks = [
                { id: 1, title: 'Fix Leaky Faucet', category: 'Home Repair', status: 'Matched', date: 'Oct 26, 2:00 PM', image: '🔧' },
                { id: 2, title: 'Yard Cleanup', category: 'Gardening', status: 'Pending', date: 'Searching...', image: '🌳' },
                { id: 3, title: 'Pet Sitting', category: 'Pet Care', status: 'Completed', date: 'June 13', image: '🐕' }
            ];

            return (
                <div className="min-h-screen bg-gray-50">
                    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
                        <div className="border-b p-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <button onClick={() => onNavigate('landing')} className="mr-3">
                                    <i className="fas fa-arrow-left text-xl"></i>
                                </button>
                                <h1 className="text-xl font-bold">My Requests</h1>
                            </div>
                            <i className="fas fa-bell text-xl"></i>
                        </div>

                        <div className="flex border-b">
                            {['active', 'pending', 'completed'].map((t) => (
                                <button key={t} onClick={() => setTab(t)} className={`flex-1 py-3 text-sm font-medium ${tab === t ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                                    {t.charAt(0).toUpperCase() + t.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="p-4 pb-24">
                            <div className="space-y-4">
                                {tasks.map((task) => (
                                    <div key={task.id} className="bg-white border rounded-xl p-4">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <span className="text-xs text-gray-500">{task.category}</span>
                                                <h3 className="font-bold text-lg">{task.title}</h3>
                                            </div>
                                            <div className="text-3xl">{task.image}</div>
                                        </div>
                                        <div className={`text-sm mb-2 status-${task.status.toLowerCase()}`}>
                                            {task.status}
                                        </div>
                                        <p className="text-sm text-gray-600">{task.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={() => onNavigate('resident-request')} className="fixed bottom-20 right-4 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center">
                            <i className="fas fa-plus text-xl"></i>
                        </button>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.ResidentDashboard = ResidentDashboard;
}
