# Professional Portfolio

A modern, fully customizable portfolio website built with React and Vite. Perfect for showcasing your projects, skills, and professional experience.

## Features

✨ **Modern Design** - Clean, professional UI with smooth animations and transitions
📱 **Responsive** - Fully responsive design that works on all devices (mobile, tablet, desktop)
⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
🎨 **Customizable** - Easy-to-customize configuration file for all your information
🔗 **Smooth Navigation** - Sticky header with smooth scrolling between sections
📧 **Contact Form** - Built-in contact form with email integration
🎯 **SEO Ready** - Semantic HTML and optimized structure

## Project Structure

```
src/
├── components/           # React components for each section
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero/landing section
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Skills section
│   ├── Experience.jsx   # Work experience section
│   ├── Projects.jsx     # Featured projects section
│   ├── Contact.jsx      # Contact form section
│   ├── Footer.jsx       # Footer with copyright
│   └── *.css           # Component-specific styles
├── config/
│   └── portfolioData.js # All customizable content
├── App.jsx             # Main app component
├── App.css             # Global app styles
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Portfolio
Edit `src/config/portfolioData.js` with your personal information:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    phone: "+91-XXXXXXXXXX",
    location: "Your City, Country",
    summary: "Your professional summary",
    image: "/profile.jpg",
  },
  // ... add more sections
}
```

### 3. Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

## Customization Guide

### 📝 Personal Information
Edit `src/config/portfolioData.js`:

```javascript
personal: {
  name: "Your Full Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  phone: "+1-XXXXXXXXXX",
  location: "City, Country",
  summary: "A brief professional summary about yourself",
  image: "/profile.jpg", // Place image in public/ folder
}
```

### 🛠️ Skills Section
Add or modify skills by category:

```javascript
skills: {
  title: "Skills",
  categories: [
    {
      name: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Vite"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "MongoDB"],
    },
  ],
}
```

### 💼 Experience Section
Add your work experience:

```javascript
experience: [
  {
    id: 1,
    company: "Company Name",
    position: "Job Title",
    duration: "January 2023 - Present",
    description: [
      "Key responsibility 1",
      "Key responsibility 2",
      "Key responsibility 3",
    ],
  },
]
```

### 📚 Education Section
Add your educational background:

```javascript
education: [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2023",
    gpa: "3.8/4.0", // optional
  },
]
```

### 🎨 Projects Section
Showcase your best projects:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of what this project does",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
    image: "/project1.jpg",
  },
]
```

### 🔗 Social Links
Add your social media profiles:

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  portfolio: "https://yourportfolio.com",
}
```

### 📧 Contact Information
Update contact details:

```javascript
contact: {
  email: "your.email@example.com",
  phone: "+91-XXXXXXXXXX",
  location: "Your City, Country",
  message: "Custom greeting message for contact section",
}
```

## Adding Media Files

1. **Profile Image**: Place your profile photo in `public/profile.jpg`
2. **Project Images**: Add project screenshots to `public/` folder and reference in `portfolioData.js`

Example:
```javascript
image: "/profile.jpg" // References public/profile.jpg
```

## Styling & Colors

### Primary Colors
The portfolio uses a purple gradient theme. To customize colors, edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;     /* Main purple */
  --secondary-color: #764ba2;   /* Accent purple */
  --text-color: #333;           /* Dark text */
  --text-light: #666;           /* Light text */
  --bg-light: #f8f9fa;          /* Light background */
}
```

### Component Styles
Each component has its own CSS file. You can modify animations, spacing, and colors in:
- `src/components/Header.css`
- `src/components/Hero.css`
- `src/components/About.css`
- `src/components/Skills.css`
- `src/components/Experience.css`
- `src/components/Projects.css`
- `src/components/Contact.css`

## Contact Form Integration

The contact form currently uses `mailto:` for email. For production use, integrate with:

### Option 1: EmailJS (Recommended)
```bash
npm install @emailjs/browser
```

Then update `src/components/Contact.jsx` to use EmailJS.

### Option 2: Formspree
Replace the `handleSubmit` function to send to Formspree endpoints.

### Option 3: Custom Backend
Create a backend endpoint and update the form submission to send data there.

## Navigation Sections

The portfolio automatically generates navigation based on sections defined in `portfolioData.js`. Sections included:
- Home (Hero)
- About
- Skills
- Experience
- Projects
- Contact

Edit or add sections by modifying the `navigation` array in `portfolioData.js`.

## Performance Tips

1. **Optimize Images**: Compress images before adding to `public/` folder
2. **Code Splitting**: Components are already split for better performance
3. **Lazy Loading**: Consider adding image lazy loading for better performance
4. **Build Optimization**: Run `npm run build` to create optimized production build

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run: `npm run build`
3. Push the `dist` folder to `gh-pages` branch

## Troubleshooting

### Styles not loading?
- Clear browser cache (Ctrl + Shift + Delete)
- Restart development server (`npm run dev`)

### Images not showing?
- Ensure images are in the `public/` folder
- Check file paths in `portfolioData.js`

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check for syntax errors in `portfolioData.js`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please check the component files or reach out through the contact form on your portfolio.

---

**Happy Customizing! 🎉**
