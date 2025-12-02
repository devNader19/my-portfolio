# Portfolio - Backend Developer

A modern, responsive portfolio website for Node.js backend developers built with React.

## Features

- ✨ Modern and beautiful UI design
- 🌙 Dark mode and Light mode
- 📱 Fully responsive design
- 🚀 Multi-page navigation (Home, About, Skills, Projects, Services)
- 🎨 Modern color scheme with gradients
- ⚡ Fast and optimized with Vite

## Pages

- **Home** - Landing page with hero section, stats, and featured skills
- **About** - Personal information, experience, and education timeline
- **Skills** - Detailed skill categories with progress bars
- **Projects** - Showcase of backend projects with technologies used
- **Services** - Services offered as a backend developer

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── contexts/        # React contexts (ThemeContext)
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global app styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and CSS variables
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `src/pages/Home.jsx` - Hero section and stats
- `src/pages/About.jsx` - Personal information and experience
- `src/pages/Skills.jsx` - Your skills and technologies
- `src/pages/Projects.jsx` - Your projects
- `src/pages/Services.jsx` - Services you offer
- `src/components/Footer.jsx` - Social links and contact information

### Change Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  --accent-tertiary: #ec4899;
  /* ... */
}
```

### Theme Colors

The theme system automatically switches between light and dark mode colors defined in `src/index.css`.

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3 with CSS Variables

## License

MIT License - feel free to use this portfolio for your own projects!

## Contact

For questions or suggestions, feel free to reach out!
