// AboutPage Component
// TODO: Extract from original single-file application

function AboutPage({ onNavigate, users, setUsers, settings, setSettings }) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation onNavigate={onNavigate} currentPage="AboutPage" />
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-4">AboutPage</h1>
                <p>Component content to be added</p>
            </div>
        </div>
    );
}

if (typeof window !== 'undefined') {
    window.AboutPage = AboutPage;
}
