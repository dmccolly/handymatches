// AdminComms Component
        function AdminComms({ onNavigate, users }) {
            const [tab, setTab] = useState('compose');
            const [recipients, setRecipients] = useState('all');
            const [message, setMessage] = useState('');
            const [history, setHistory] = useState([
                { id: 1, subject: 'Weekly Update - Dec 1', recipients: 'All Users', date: '2024-12-01', delivered: true },
                { id: 2, subject: 'Welcome New Volunteers', recipients: 'Volunteers', date: '2024-11-28', delivered: true }
            ]);

            const sendMessage = () => {
                if (!message) {
                    alert('Please compose a message');
                    return;
                }
                const newMsg = {
                    id: history.length + 1,
                    subject: message.split('\n')[0].substring(0, 50),
                    recipients: recipients === 'all' ? 'All Users' : recipients,
                    date: new Date().toISOString().split('T')[0],
                    delivered: true
                };
                setHistory([newMsg, ...history]);
                setMessage('');
                alert(`Message sent to ${recipients === 'all' ? 'all users' : recipients}!`);
            };

            return (
                <div className="min-h-screen bg-gray-900">
                    <div className="max-w-4xl mx-auto bg-gray-900 min-h-screen">
                        <div className="bg-gray-800 p-4 flex items-center">
                            <button onClick={() => onNavigate('landing')} className="text-white mr-4">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>
                            <h1 className="text-xl font-bold text-white flex-1">Communication Hub</h1>
                        </div>

                        <div className="flex border-b border-gray-700">
                            {['compose', 'history'].map((t) => (
                                <button key={t} onClick={() => setTab(t)} className={`flex-1 py-3 text-sm font-medium ${tab === t ? 'text-white bg-blue-600' : 'text-gray-400 bg-gray-800'}`}>
                                    {t.charAt(0).toUpperCase() + t.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="p-4">
                            {tab === 'compose' && (
                                <div>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <label className="block text-white text-sm font-semibold mb-2">Recipients</label>
                                        <select value={recipients} onChange={(e) => setRecipients(e.target.value)} className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600">
                                            <option value="all">All Users ({users.length})</option>
                                            <option value="volunteers">All Volunteers ({users.filter(u => u.role === 'Volunteer').length})</option>
                                            <option value="residents">All Residents ({users.filter(u => u.role === 'Resident').length})</option>
                                            <option value="pending">Pending Users ({users.filter(u => u.status === 'pending').length})</option>
                                        </select>
                                    </div>
                                    
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <label className="block text-white text-sm font-semibold mb-2">Message</label>
                                        <textarea 
                                            placeholder="Compose your message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows="10"
                                            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 outline-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium">
                                            <i className="fas fa-clock mr-2"></i>Schedule
                                        </button>
                                        <button onClick={sendMessage} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                                            <i className="fas fa-paper-plane mr-2"></i>Send Now
                                        </button>
                                    </div>
                                </div>
                            )}

                            {tab === 'history' && (
                                <div className="space-y-3">
                                    {history.map((msg) => (
                                        <div key={msg.id} className="bg-gray-800 rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-white font-semibold">{msg.subject}</h3>
                                                <span className="text-xs text-gray-400">{msg.date}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-2">Sent to: {msg.recipients}</p>
                                            <div className="flex items-center text-xs text-green-400">
                                                <i className="fas fa-check-double mr-2"></i>
                                                <span>Delivered successfully</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.AdminComms = AdminComms;
}
