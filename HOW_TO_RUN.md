# 🎬 How to Run Your Portfolio

## ⚡ Quick Start (Copy & Paste)

### Step 1: Open Terminal
In VS Code: Press **`Ctrl + `` (backtick)** or go to **Terminal → New Terminal**

### Step 2: Run These Commands

```bash
# Install dependencies (only first time)
npm install

# Start development server
npm run dev
```

### Step 3: Open Browser
Click the link in terminal (usually **http://localhost:5173**)

**That's it! Your portfolio is running!** 🎉

---

## 📝 Commands Explained

### `npm install`
- Installs all project dependencies
- Only needed once or when dependencies change
- Creates `node_modules/` folder

### `npm run dev`
- Starts Vite development server
- Shows URL like `http://localhost:5173`
- Auto-reloads when you save changes
- Press `Q` to stop

### `npm run build`
- Creates optimized production build
- Generates `dist/` folder
- Ready to deploy to the web

### `npm run preview`
- Preview production build locally
- Test how it looks after build

### `npm run lint`
- Check code for errors
- Suggest improvements

---

## 🔄 Development Workflow

### 1. Start Server
```bash
npm run dev
```

### 2. Edit `src/config/portfolioData.js`
Change your information:
```javascript
personal: {
  name: "Your Name",        // ← Change this
  title: "Your Title",      // ← And this
  email: "your@email.com",  // ← And this
}
```

### 3. Save File (Ctrl + S)
- Browser automatically updates
- Changes appear instantly
- No need to restart

### 4. Repeat Steps 2-3
Edit, save, see changes, repeat!

### 5. Stop Server (When Done)
Press **Q** in terminal

---

## 🌐 How to Access Your Portfolio

### Local (During Development)
```
http://localhost:5173/
```

### After Deployment (Live)
```
https://your-portfolio-name.vercel.app/
https://your-portfolio-name.netlify.app/
https://your-github-username.github.io/
```

---

## 🐛 If Something Goes Wrong

### Portfolio won't load
```bash
# Stop server (Q or Ctrl+C)
# Clear cache and reinstall
npm install
npm run dev
```

### Styles look broken
```bash
# Hard refresh browser
Ctrl + Shift + Delete  # Clear cache
Ctrl + Shift + R       # Hard refresh
```

### Command not found
```bash
# Make sure you're in project directory
cd c:\Users\dell\my_portfolio

# Then run commands
npm run dev
```

### Port 5173 already in use
```bash
# Kill process using port 5173
# Or let Vite use a different port

# Vite will automatically try next port
npm run dev
```

---

## 📂 File Locations

### Open these to customize:
- `src/config/portfolioData.js` - Your content ⭐
- `public/profile.jpg` - Your profile image
- `public/project1.jpg` - Project screenshots

### Don't edit unless you know what you're doing:
- `src/App.jsx` - Main component
- `src/components/*.jsx` - Component files
- `src/components/*.css` - Component styles

---

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts and done!
```

### Option 2: Netlify
```bash
# Build locally first
npm run build

# Deploy dist/ folder to Netlify
# Through web interface
```

### Option 3: GitHub Pages
```bash
# Build
npm run build

# Upload dist/ folder contents
# To GitHub Pages
```

---

## 📊 Terminal Output Examples

### ✅ Successful Start
```
VITE v7.2.4  ready in 515 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```
✅ Copy the URL and paste in browser!

### ✅ File Changes Detected
```
4:31:28 PM [vite] hmr update /src/config/portfolioData.js
```
✅ Your browser updated automatically!

### ❌ Error Example
```
Error: Module not found
```
❌ Check file paths and spelling

---

## 🎯 Checklist: Running Your Portfolio

- [ ] Terminal is open in project folder
- [ ] Ran `npm install` once
- [ ] Ran `npm run dev`
- [ ] Copied URL from terminal
- [ ] Pasted URL in browser
- [ ] Portfolio loads
- [ ] Can edit `portfolioData.js`
- [ ] Changes appear instantly

---

## 💡 Tips

1. **Keep server running** while developing
   - Don't close terminal
   - Minimize it if needed

2. **One terminal session**
   - Use same terminal for all commands
   - Open new one only if needed

3. **Check browser console**
   - Press F12
   - Look for any red errors
   - These help debug issues

4. **Hard refresh browser**
   - Sometimes browser caches old version
   - Use Ctrl + Shift + R to hard refresh

5. **Mobile testing**
   - Open DevTools (F12)
   - Click device toggle (Ctrl + Shift + M)
   - Test all screen sizes

---

## 🔗 Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + `` | Open Terminal in VS Code |
| `Ctrl + S` | Save file |
| `Ctrl + /` | Comment/uncomment code |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `F12` | Open Browser DevTools |
| `Ctrl + Shift + R` | Hard refresh browser |
| `Ctrl + Shift + Delete` | Clear browser cache |

---

## 📞 Need More Help?

- Read **GETTING_STARTED.md** for general help
- Read **CUSTOMIZATION_GUIDE.md** for detailed instructions
- Read **STRUCTURE_OVERVIEW.md** to understand the project
- Check documentation files in project root

---

**Ready? Run `npm run dev` and start building your portfolio!** 🚀
