# Getting Started with Your Portfolio

## ✅ First Steps

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Start the Development Server**
```bash
npm run dev
```

You should see output like:
```
  VITE v7.2.4  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 3. **Open in Browser**
Visit `http://localhost:5173/` - Your portfolio is now running! 🎉

---

## 🎨 Customize Your Portfolio

All content is stored in one easy-to-edit file:

**`src/config/portfolioData.js`**

This is where you add:
- Your name, title, and contact info
- Your skills and expertise
- Work experience and achievements
- Your best projects with links
- Education and certifications
- Social media profiles

### Quick Example:
```javascript
personal: {
  name: "Maruti Auti",           // Change to your name
  title: "Full Stack Developer",  // Your job title
  email: "maruti@example.com",   // Your email
  // ... more fields
}
```

---

## 📁 Project Structure

```
my_portfolio/
├── src/
│   ├── components/           # Website sections (Header, Hero, Skills, etc.)
│   ├── config/
│   │   └── portfolioData.js  # ⭐ EDIT THIS FILE - All your content
│   ├── App.jsx              # Main component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.jsx             # Entry point
├── public/                  # Add your images here
├── package.json
└── vite.config.js
```

---

## 🚀 Features Included

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Smooth Scrolling** - Click navigation smoothly scrolls to sections
✅ **Professional Layout** - 8 sections: Header, Hero, About, Skills, Experience, Projects, Contact, Footer
✅ **Contact Form** - Built-in contact form (configured to work with email)
✅ **Fast Loading** - Built with Vite for optimal performance
✅ **SEO Friendly** - Proper semantic HTML structure

---

## 📝 Sections Explained

### 🏠 **Hero Section**
- Your name and job title
- Professional summary
- Call-to-action buttons

### 👤 **About Section**
- More details about you
- Your education
- Quick stats (projects, years, dedication)

### 💡 **Skills Section**
- Organized by category (Frontend, Backend, Tools)
- Easy to add/remove skills

### 💼 **Experience Section**
- Timeline view of your work history
- Company, position, duration
- Key responsibilities

### 🎯 **Projects Section**
- Showcase your best work
- Include technology stack
- Links to code and live demos

### ✉️ **Contact Section**
- Contact information
- Contact form
- Social media links

---

## 🎨 Customize Appearance

### **Colors**
Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary-color: #667eea;    /* Main purple */
  --secondary-color: #764ba2;  /* Accent purple */
}
```

### **Fonts**
The portfolio uses modern system fonts. To change, edit the `font-family` in `src/index.css`.

### **Component Styles**
Each component has its own CSS file in `src/components/`:
- `Header.css` - Navigation bar
- `Hero.css` - Landing section
- `About.css` - About section
- `Skills.css` - Skills grid
- `Experience.css` - Timeline
- `Projects.css` - Project cards
- `Contact.css` - Contact form and info

---

## 📸 Adding Images

### Profile Picture
1. Place your image in `public/` folder (e.g., `profile.jpg`)
2. Update in `portfolioData.js`:
```javascript
image: "/profile.jpg"
```

### Project Images
1. Add screenshots to `public/` folder
2. Update project data:
```javascript
projects: [
  {
    image: "/project1.jpg",
    // ... other fields
  }
]
```

---

## 🌐 Deploy Your Portfolio

### **Option 1: Vercel (Easiest)**
```bash
npm install -g vercel
vercel
```

### **Option 2: Netlify**
1. Push code to GitHub
2. Connect repository to Netlify
3. Site automatically deploys!

### **Option 3: GitHub Pages**
```bash
npm run build
# Deploy the dist/ folder
```

---

## 🔧 Available Commands

```bash
# Development
npm run dev        # Start development server

# Production
npm run build      # Build for production
npm run preview    # Preview production build locally

# Code Quality
npm run lint       # Check for code issues
```

---

## 🚨 Common Issues & Solutions

### **Images not showing?**
- ✅ Make sure images are in `public/` folder
- ✅ Check file path in `portfolioData.js`
- ✅ Restart dev server (`npm run dev`)

### **Styles look different?**
- ✅ Clear browser cache (Ctrl + Shift + Delete)
- ✅ Hard refresh (Ctrl + Shift + R)
- ✅ Restart dev server

### **Contact form not working?**
- The current setup uses `mailto:` links
- For a fully functional form, integrate with EmailJS or Formspree
- See `CUSTOMIZATION_GUIDE.md` for integration options

---

## 📚 Next Steps

1. ✏️ **Edit** `src/config/portfolioData.js` with your information
2. 📸 **Add** your profile image to `public/` folder
3. 🎨 **Customize** colors in `src/index.css` if you want
4. 🌐 **Deploy** using Vercel, Netlify, or GitHub Pages
5. 🎉 **Share** your portfolio link!

---

## 💡 Tips for Best Results

- ✅ Use high-quality images (compress them first)
- ✅ Keep descriptions clear and concise
- ✅ Update projects with your best work
- ✅ Include links to GitHub and LinkedIn
- ✅ Test on mobile devices
- ✅ Get feedback from friends

---

## 📖 For More Details

See `CUSTOMIZATION_GUIDE.md` for comprehensive customization instructions and integration guides.

---

**You're all set! Start by editing `src/config/portfolioData.js` and watch your portfolio come to life. Good luck! 🚀**
