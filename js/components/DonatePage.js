// DonatePage Component
        function DonatePage({ onNavigate }) {
            const [amount, setAmount] = useState(50);
            return (
                <div className="min-h-screen bg-white">
                    <Navigation onNavigate={onNavigate} currentPage="donate" />
                    <div className="max-w-2xl mx-auto px-4 py-12">
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-6">💰</div>
                            <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
                            <p className="text-gray-600">Your donation empowers our volunteers to help community members in need.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="space-y-4 mb-6">
                                {[[25, 'Fund materials for home repairs'], [50, 'Background checks for volunteers', true], [100, 'Platform operating costs']].map(([val, desc, popular]) => (
                                    <label key={val} onClick={() => setAmount(val)} className={`block p-4 border-2 rounded-xl cursor-pointer relative ${amount === val ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                                        {popular && <span className="absolute -top-3 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Most Popular</span>}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-bold text-2xl">${val} <span className="text-sm font-normal text-gray-600">one-time</span></div>
                                                <div className="text-sm text-gray-600 mt-1">{desc}</div>
                                            </div>
                                            <input type="radio" checked={amount === val} onChange={() => {}} />
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <button className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold">Donate ${amount}</button>
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.DonatePage = DonatePage;
}
