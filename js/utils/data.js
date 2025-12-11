// Mock Database - Initial Users
const initialUsers = [
    { 
        id: 1, 
        name: 'Eleanor Vance', 
        email: 'eleanor@email.com', 
        role: 'Volunteer', 
        status: 'active', 
        skills: ['Plumbing', 'Painting'], 
        backgroundCheck: 'completed', 
        joinDate: '2023-01-15', 
        tasksCompleted: 12, 
        avatar: '👨' 
    },
    { 
        id: 2, 
        name: 'David Chen', 
        email: 'david@email.com', 
        role: 'Resident', 
        status: 'active', 
        backgroundCheck: 'n/a', 
        joinDate: '2023-03-20', 
        avatar: '👨' 
    },
    { 
        id: 3, 
        name: 'Maria Garcia', 
        email: 'maria@email.com', 
        role: 'Volunteer', 
        status: 'pending', 
        skills: ['Gardening'], 
        backgroundCheck: 'pending', 
        joinDate: '2024-12-01', 
        tasksCompleted: 0, 
        avatar: '👩' 
    },
    { 
        id: 4, 
        name: 'Robert Miller', 
        email: 'robert@email.com', 
        role: 'Resident', 
        status: 'active', 
        backgroundCheck: 'n/a', 
        joinDate: '2023-06-10', 
        avatar: '👨' 
    },
    { 
        id: 5, 
        name: 'Sophie Williams', 
        email: 'sophie@email.com', 
        role: 'Volunteer', 
        status: 'active', 
        skills: ['Pet Care', 'Dog Walking'], 
        backgroundCheck: 'completed', 
        joinDate: '2023-08-05', 
        tasksCompleted: 18, 
        avatar: '👩' 
    },
    { 
        id: 6, 
        name: 'John Pending', 
        email: 'john@email.com', 
        role: 'Volunteer', 
        status: 'pending', 
        skills: ['Carpentry'], 
        backgroundCheck: 'not_started', 
        joinDate: '2024-12-08', 
        tasksCompleted: 0, 
        avatar: '👨' 
    },
];

// Sample Gallery Images Data
const initialGalleryImages = [
    { 
        id: 1, 
        title: 'Garden cleanup for Mrs. Davis', 
        image: '🌳',
        uploadedBy: 'Sophie Williams',
        date: '2024-11-15',
        approved: true
    },
    { 
        id: 2, 
        title: 'Fixed leaky faucet', 
        image: '🔧',
        uploadedBy: 'Eleanor Vance',
        date: '2024-11-20',
        approved: true
    },
    { 
        id: 3, 
        title: 'Painting the fence', 
        image: '🎨',
        uploadedBy: 'Eleanor Vance',
        date: '2024-11-22',
        approved: true
    },
    { 
        id: 4, 
        title: 'Dog walking with Max', 
        image: '🐕',
        uploadedBy: 'Sophie Williams',
        date: '2024-11-25',
        approved: true
    },
    { 
        id: 5, 
        title: 'Installing new window', 
        image: '🪟',
        uploadedBy: 'John Pending',
        date: '2024-12-01',
        approved: false
    },
    { 
        id: 6, 
        title: 'Planting spring flowers', 
        image: '🌸',
        uploadedBy: 'Maria Garcia',
        date: '2024-12-05',
        approved: true
    }
];

// Skill Categories
const skillCategories = [
    { 
        category: 'Home Repairs', 
        items: ['Plumbing', 'Electrical Work', 'Painting', 'Carpentry', 'Drywall Repair', 'Window Installation'] 
    },
    { 
        category: 'Pet Care', 
        items: ['Dog Walking', 'Pet Sitting', 'Pet Grooming'] 
    },
    { 
        category: 'Outdoor', 
        items: ['Gardening', 'Lawn Mowing', 'Snow Removal', 'Landscaping'] 
    },
    {
        category: 'General Help',
        items: ['Shopping', 'Transportation', 'Technology Support', 'Moving Assistance']
    }
];

// Task Categories
const taskCategories = [
    'Home Repair',
    'Gardening',
    'Pet Care',
    'Shopping',
    'Transportation',
    'Technology Support',
    'Moving/Heavy Lifting',
    'Other'
];

// Export for use in other components
if (typeof window !== 'undefined') {
    window.HandyMatchesData = {
        initialUsers,
        initialGalleryImages,
        skillCategories,
        taskCategories
    };
}
