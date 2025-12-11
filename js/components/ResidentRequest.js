function ResidentRequest({ onNavigate }) {
    const { useState } = React;
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        taskTitle: '', description: '', category: '', address: '', date: '', urgency: 'medium'
    });

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8">
                <div className="flex items-center mb-6">
                    <button onClick={() => step > 1 ? setStep(step - 1) : onNavigate('landing')}>
                        <i className="fas fa-arrow-left text-xl"></i>
                    </button>
                    <div className="ml-4 flex-1 text-center">
                        <div className="font-semibold">Request Help</div>
                        <div className="text-sm text-gray-500">Step {step} of 4</div>
                    </div>
                </div>

                <div className="progress-bar mb-8">
                    <div className="progress-bar-fill bg-green-600" style={{width: `${(step/4)*100}%`}}></div>
                </div>

                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">What do you need help with?</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Task Title (e.g., Fix Leaky Faucet)" className="form-input" 
                                value={formData.taskTitle}
                                onChange={(e) => setFormData({...formData, taskTitle: e.target.value})} />
                            <textarea placeholder="Task Description" rows="4" className="form-input"
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
                            <select className="form-input"
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                <option>Select a category</option>
                                <option>Home Repair</option>
                                <option>Gardening</option>
                                <option>Pet Care</option>
                                <option>Shopping</option>
                                <option>Transportation</option>
                            </select>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Your Needs & Circumstances</h2>
                        <p className="text-gray-600 mb-6">To help us match you with the right volunteer.</p>
                        <div className="space-y-3">
                            {['I lack the necessary skills', 'I have a physical limitation', "I don't have the tools", 'Financial constraint'].map((need, i) => (
                                <label key={i} className="flex items-start p-3 border rounded-lg cursor-pointer">
                                    <input type="checkbox" className="mt-1 mr-3" />
                                    <span className="text-sm">{need}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">When & Where?</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Full Address" className="form-input"
                                value={formData.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})} />
                            <input type="datetime-local" className="form-input"
                                value={formData.date}
                                onChange={(e) => setFormData({...formData, date: e.target.value})} />
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <span>Are the dates flexible?</span>
                            </label>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Any Specifics?</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Urgency Level</label>
                                <div className="flex gap-2">
                                    {['Low', 'Medium', 'High'].map((level) => (
                                        <button key={level} 
                                            onClick={() => setFormData({...formData, urgency: level.toLowerCase()})}
                                            className={`flex-1 py-3 border-2 rounded-lg ${formData.urgency === level.toLowerCase() ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="photo-upload-zone">
                                <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
                                <p className="text-gray-600">Add Photos (Optional)</p>
                            </div>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-3" />
                                <span>Is there a pet in the home?</span>
                            </label>
                        </div>
                    </div>
                )}

                <button 
                    onClick={() => step < 4 ? setStep(step + 1) : (alert('Request submitted!'), onNavigate('resident-dashboard'))} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full text-lg font-semibold mt-8"
                >
                    {step === 4 ? 'Submit Request' : 'Continue'}
                </button>
            </div>
        </div>
    );
}

if (typeof window !== 'undefined') {
    window.ResidentRequest = ResidentRequest;
}
