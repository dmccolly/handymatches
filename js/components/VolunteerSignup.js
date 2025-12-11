function VolunteerSignup({ onNavigate, users, setUsers }) {
    const { useState } = React;
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', zipCode: '', skills: [], availability: ''
    });

    const handleComplete = () => {
        const newUser = {
            id: users.length + 1,
            name: formData.fullName,
            email: formData.email,
            role: 'Volunteer',
            status: 'pending',
            skills: formData.skills,
            backgroundCheck: 'not_started',
            joinDate: new Date().toISOString().split('T')[0],
            tasksCompleted: 0,
            avatar: '👤'
        };
        setUsers([...users, newUser]);
        alert('Application submitted! An administrator will review your application.');
        onNavigate('landing');
    };

    const { skillCategories } = window.HandyMatchesData;

    const toggleSkill = (skill) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill) 
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8">
                <div className="flex items-center mb-6">
                    <button onClick={() => step > 1 ? setStep(step - 1) : onNavigate('landing')}>
                        <i className="fas fa-arrow-left text-xl"></i>
                    </button>
                    <div className="ml-4">Step {step} of 3</div>
                </div>

                <div className="progress-bar mb-8">
                    <div className="progress-bar-fill bg-blue-600" style={{width: `${(step/3)*100}%`}}></div>
                </div>

                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Let's Get Started</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Full Name" className="form-input" 
                                value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                            <input type="email" placeholder="Email" className="form-input" 
                                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                            <input type="tel" placeholder="Phone" className="form-input" 
                                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                            <input type="text" placeholder="ZIP Code" className="form-input" 
                                value={formData.zipCode} onChange={(e) => setFormData({...formData, zipCode: e.target.value})} />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">What are your skills?</h2>
                        <div className="space-y-6">
                            {skillCategories.map((category, idx) => (
                                <div key={idx}>
                                    <h3 className="font-semibold mb-3">{category.category}</h3>
                                    <div className="space-y-2">
                                        {category.items.map((skill, i) => (
                                            <label key={i} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                                <input 
                                                    type="checkbox" 
                                                    className="mr-3"
                                                    checked={formData.skills.includes(skill)}
                                                    onChange={() => toggleSkill(skill)}
                                                />
                                                <span>{skill}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">When are you available?</h2>
                        <div className="space-y-3">
                            {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekend Mornings', 'Weekend Afternoons', 'Flexible'].map((option, i) => (
                                <label key={i} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                    <input 
                                        type="radio" 
                                        name="availability" 
                                        className="mr-3"
                                        checked={formData.availability === option}
                                        onChange={() => setFormData({...formData, availability: option})}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                <button 
                    onClick={() => step < 3 ? setStep(step + 1) : handleComplete()} 
                    className="w-full btn-primary text-white py-4 rounded-full text-lg font-semibold mt-8"
                >
                    {step === 3 ? 'Complete Registration' : 'Continue'}
                </button>
            </div>
        </div>
    );
}

if (typeof window !== 'undefined') {
    window.VolunteerSignup = VolunteerSignup;
}
