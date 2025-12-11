# HandyMatches - Refactored Application

## Overview
HandyMatches is a community platform connecting volunteers with residents who need help with everyday tasks. This is the refactored version with modular file structure.

## Project Structure

```
handymatches/
├── index.html                  # Main HTML file
├── css/
│   ├── main.css               # Core styles
│   └── components.css         # Component-specific styles
├── js/
│   ├── app.js                 # Main application component
│   ├── utils/
│   │   └── data.js            # Data utilities and mock database
│   └── components/
│       ├── Navigation.js
│       ├── LandingPage.js
│       ├── VolunteerSignup.js
│       ├── ResidentRequest.js
│       ├── ResidentDashboard.js
│       ├── VolunteerDashboard.js
│       ├── AdminDashboard.js
│       ├── AdminUserManagement.js
│       ├── AdminComms.js
│       ├── AdminAnalytics.js
│       ├── TeamChatHub.js
│       ├── AboutPage.js
│       ├── ContactPage.js
│       ├── GalleryPage.js
│       └── DonatePage.js
└── images/                     # Image assets (to be added)
```

## Key Improvements

### 1. **Modular Structure**
- Separated HTML, CSS, and JavaScript into dedicated files
- Each React component in its own file for better maintainability
- Shared utilities and data in separate module

### 2. **Enhanced Styling**
- Separate CSS files for main styles and component-specific styles
- Added hover effects, transitions, and animations
- Responsive design improvements
- Photo gallery optimizations

### 3. **Photo Gallery Features**
- Image upload zones with drag-and-drop support
- Gallery grid layout with responsive breakpoints
- Photo approval workflow for admins
- Volunteer and resident photo sections

### 4. **Better Organization**
- Data management centralized in utils/data.js
- Component props clearly defined
- Consistent naming conventions
- Reusable CSS classes

## Next Steps

### 1. Complete Component Migration
The following components have placeholders and need full implementation:
- ResidentDashboard
- VolunteerDashboard
- AdminDashboard
- AdminUserManagement
- AdminComms
- AdminAnalytics
- TeamChatHub
- AboutPage
- ContactPage
- GalleryPage
- DonatePage

To complete each component:
1. Open the original single-file `index.html`
2. Find the component function
3. Copy the complete function code
4. Replace the placeholder in the corresponding component file

### 2. Add Real Images
Replace emoji placeholders with actual photos:
1. Add photos to the `images/` directory
2. Update component references from emojis to image paths
3. Recommended structure:
   ```
   images/
   ├── volunteers/
   │   ├── action-1.jpg
   │   ├── action-2.jpg
   │   └── ...
   ├── residents/
   │   ├── receiving-help-1.jpg
   │   ├── receiving-help-2.jpg
   │   └── ...
   └── projects/
       ├── project-1.jpg
       ├── project-2.jpg
       └── ...
   ```

### 3. Implement Photo Upload
To make photo upload functional:
1. Add a backend service (recommended: Cloudinary, AWS S3, or similar)
2. Update `VolunteerDashboard.js` photo upload handler
3. Connect to your storage API
4. Implement admin approval workflow in `AdminDashboard.js`

### 4. Database Integration
Currently using mock data. To connect a real database:
1. Replace `utils/data.js` mock data with API calls
2. Recommended backends: Firebase, Supabase, or custom REST API
3. Update all component data fetching
4. Add authentication layer

## Development

### Local Development
Simply open `index.html` in a web browser. The app uses CDN-hosted libraries so no build process is required.

### Deployment to Netlify
1. Push this directory to GitHub
2. Connect to Netlify
3. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
4. Deploy!

## Technologies Used
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Babel Standalone** - JSX transformation in browser

## File Details

### CSS Files
- **main.css**: Global styles, fonts, transitions, utility classes
- **components.css**: Status badges, navigation, forms, photo gallery, mobile nav

### JavaScript Files
- **app.js**: Main App component with routing and state management
- **data.js**: Mock database, initial data, skill categories
- **Components**: Individual page/feature components

## Features

### For Volunteers
- Multi-step signup process
- Skill selection
- Availability scheduling
- Task dashboard
- Photo upload for completed projects

### For Residents
- Help request submission
- Task tracking
- Volunteer matching

### For Administrators
- User management
- Background check workflow
- Communication tools
- Analytics and reporting
- Photo gallery moderation

## Customization

### Colors
Main brand colors defined in Tailwind classes:
- Primary: orange-500
- Secondary: blue-600
- Success: green-600

To change, update classes throughout components or customize Tailwind config.

### Content
Update text content in respective component files:
- Mission statement: `LandingPage.js`
- About content: `AboutPage.js`
- Contact info: `ContactPage.js`

## Support
For issues or questions, please open an issue on GitHub or contact the development team.

## License
[Add your license here]

## Contributors
[Add contributors here]
