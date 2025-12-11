// TeamChatHub Component
        function TeamChatHub({ onNavigate }) {
            const [messages, setMessages] = useState([
                { id: 1, user: 'Admin Sarah', avatar: '👩', message: 'New volunteer application from John Pending', time: '10:30 AM', type: 'system' },
                { id: 2, user: 'Coordinator Mike', avatar: '👨', message: 'I can review it this afternoon', time: '10:32 AM', type: 'user' },
                { id: 3, user: 'Admin Sarah', avatar: '👩', message: 'Great! Background check will be needed', time: '10:35 AM', type: 'user' }
            ]);
            const [newMessage, setNewMessage] = useState('');

            const sendMessage = () => {
                if (!newMessage.trim()) return;
                const msg = {
                    id: messages.length + 1,
                    user: 'You',
                    avatar: '👤',
                    message: newMessage,
                    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
                    type: 'user'
                };
                setMessages([...messages, msg]);
                setNewMessage('');
            };

            return (
                <div className="min-h-screen bg-gray-900">
                    <div className="max-w-4xl mx-auto bg-gray-900 h-screen flex flex-col">
                        <div className="bg-gray-800 p-4 flex items-center">
                            <button onClick={() => onNavigate('landing')} className="text-white mr-4">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>
                            <div className="flex-1">
                                <h1 className="text-xl font-bold text-white">Team Communication Hub</h1>
                                <p className="text-sm text-gray-400">Internal team collaboration</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-green-500 text-sm">3 online</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex items-start ${msg.type === 'system' ? 'justify-center' : ''}`}>
                                    {msg.type === 'system' ? (
                                        <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm">
                                            <i className="fas fa-info-circle mr-2 text-blue-400"></i>
                                            {msg.message}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-3xl mr-3">{msg.avatar}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-white font-semibold text-sm">{msg.user}</span>
                                                    <span className="text-gray-500 text-xs">{msg.time}</span>
                                                </div>
                                                <div className="bg-gray-800 text-white p-3 rounded-lg inline-block max-w-xl">
                                                    {msg.message}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-800 p-4 border-t border-gray-700">
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 outline-none"
                                />
                                <button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.TeamChatHub = TeamChatHub;
}
