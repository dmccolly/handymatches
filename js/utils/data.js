// Mock Database
const initialUsers = [
            { id: 1, name: 'Eleanor Vance', email: 'eleanor@email.com', role: 'Volunteer', status: 'active', skills: ['Plumbing', 'Painting'], backgroundCheck: 'completed', joinDate: '2023-01-15', tasksCompleted: 12, avatar: '👨' },
            { id: 2, name: 'David Chen', email: 'david@email.com', role: 'Resident', status: 'active', backgroundCheck: 'n/a', joinDate: '2023-03-20', avatar: '👨' },
            { id: 3, name: 'Maria Garcia', email: 'maria@email.com', role: 'Volunteer', status: 'pending', skills: ['Gardening'], backgroundCheck: 'pending', joinDate: '2024-12-01', tasksCompleted: 0, avatar: '👩' },
            { id: 4, name: 'Robert Miller', email: 'robert@email.com', role: 'Resident', status: 'active', backgroundCheck: 'n/a', joinDate: '2023-06-10', avatar: '👨' },
            { id: 5, name: 'Sophie Williams', email: 'sophie@email.com', role: 'Volunteer', status: 'active', skills: ['Pet Care', 'Dog Walking'], backgroundCheck: 'completed', joinDate: '2023-08-05', tasksCompleted: 18, avatar: '👩' },
            { id: 6, name: 'John Pending', email: 'john@email.com', role: 'Volunteer', status: 'pending', skills: ['Carpentry'], backgroundCheck: 'not_started', joinDate: '2024-12-08', tasksCompleted: 0, avatar: '👨' },
        ];

if (typeof window !== 'undefined') {
    window.HandyMatchesData = window.HandyMatchesData || {};
    window.HandyMatchesData.initialUsers = initialUsers;
}
