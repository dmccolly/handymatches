const { useState } = React;

function App() {
    const [view, setView] = useState('landing');
    const [users, setUsers] = useState(window.HandyMatchesData.initialUsers);
    const [settings, setSettings] = useState({
        autoApprovePhotos: true,
        requireBackgroundCheck: true
    });

    const contextValue = { users, setUsers, settings, setSettings };

    const views = {
        landing: <LandingPage onNavigate={setView} />,
        'volunteer-signup': <VolunteerSignup onNavigate={setView} users={users} setUsers={setUsers} />,
        'resident-request': <ResidentRequest onNavigate={setView} />,
        'resident-dashboard': <ResidentDashboard onNavigate={setView} />,
        'admin-dashboard': <AdminDashboard onNavigate={setView} users={users} setUsers={setUsers} settings={settings} setSettings={setSettings} />,
        'admin-users': <AdminUserManagement onNavigate={setView} users={users} setUsers={setUsers} settings={settings} setSettings={setSettings} />,
        'admin-comms': <AdminComms onNavigate={setView} users={users} />,
        'admin-analytics': <AdminAnalytics onNavigate={setView} users={users} />,
        'team-chat': <TeamChatHub onNavigate={setView} />,
        'volunteer-dashboard': <VolunteerDashboard onNavigate={setView} />,
        'about': <AboutPage onNavigate={setView} />,
        'contact': <ContactPage onNavigate={setView} />,
        'gallery': <GalleryPage onNavigate={setView} />,
        'donate': <DonatePage onNavigate={setView} />,
    };

    return views[view] || views.landing;
}

ReactDOM.render(<App />, document.getElementById('root'));
