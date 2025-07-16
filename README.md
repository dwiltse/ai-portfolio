# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with dark/light theme toggle and smooth animations to showcase your development projects.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with preference saving
- **Smooth Animations**: Fade-in effects and hover interactions
- **Project Showcase**: Highlight projects with AI assistance badges
- **Modern CSS**: Uses CSS custom properties and modern layout techniques
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Fast Loading**: No frameworks, just vanilla HTML/CSS/JS

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository to your computer
2. **Open** `index.html` in your web browser
3. **Customize** the content with your information (see [Customization](#customization))

### Live Server (Recommended)

For the best development experience, use a live server:

```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# If you have VS Code, install the "Live Server" extension
```

Then visit `http://localhost:8000` in your browser.

## 📂 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript for interactions
├── README.md          # This file
├── .gitignore         # Git ignore file
├── vercel.json        # Vercel deployment configuration
└── package.json       # Project metadata
```

## 🎨 Customization

### 1. Personal Information

**In `index.html`**, look for `<!-- TODO: -->` comments and update:

- Replace `"Your Name"` with your actual name
- Update `your.email@example.com` with your email
- Change `yourusername` to your GitHub username
- Update `yourprofile` to your LinkedIn profile

### 2. Projects Section

For each project card in `index.html`:

- Replace `"Project Name X"` with your project titles
- Update project descriptions
- Add your technology stack in `<span class="tech-tag">` elements
- Update project links (Live Demo and GitHub)
- Add/remove the `🤖 Built with AI` badge as needed

### 3. Skills Section

Update the skills in the three categories:
- **Frontend**: Your frontend technologies
- **Backend**: Your backend technologies  
- **AI & Tools**: AI tools and development tools you use

### 4. Theme Colors

**In `styles.css`**, modify the CSS custom properties in `:root`:

```css
:root {
    --primary-color: #3b82f6;    /* Change main brand color */
    --accent-color: #f59e0b;     /* Change accent color */
    /* ... other colors ... */
}
```

### 5. Add Project Images

1. Create an `images` folder in your project
2. Add your project screenshots
3. Replace `<div class="placeholder-image">` with:
   ```html
   <img src="images/project-name.jpg" alt="Project Name Screenshot">
   ```

## 🌐 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Automatic Updates**:
   - Every time you push to GitHub, Vercel will automatically redeploy
   - Your site will be available at `https://your-repo-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new one
   - Confirm settings
   - Your site will be deployed!

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag your project folder onto the deploy area
3. Your site will be live instantly!

## 🔧 Development Tips

### Git Workflow

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Update project information"

# Push to GitHub (after setting up remote)
git push origin main
```

### Making Changes

1. **Edit your files** using any text editor (VS Code recommended)
2. **Test locally** by opening `index.html` in your browser
3. **Commit changes** to git
4. **Push to GitHub** (if using GitHub integration with Vercel)

### Browser Testing

Test your site in different browsers:
- Chrome/Edge (Chromium-based)
- Firefox
- Safari (if on Mac)

## 🎯 Performance Tips

- **Optimize images**: Use WebP format and compress images
- **Minimize CSS/JS**: Use tools like UglifyJS for production
- **Use CDN**: Vercel automatically provides CDN for your assets

## 🐛 Troubleshooting

### Common Issues

1. **Theme toggle not working**:
   - Check browser console for JavaScript errors
   - Ensure `script.js` is loading correctly

2. **Images not displaying**:
   - Check file paths are correct
   - Ensure images are in the same directory structure

3. **Site not updating on Vercel**:
   - Check your GitHub repository has the latest changes
   - Verify Vercel is connected to the correct branch

4. **Mobile layout issues**:
   - Test on actual devices or browser dev tools
   - Check CSS media queries

### Getting Help

- Check browser developer tools (F12) for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org/)
- Test responsiveness in browser dev tools

## 📱 Mobile Optimization

The site is fully responsive and includes:
- Mobile-first CSS approach
- Touch-friendly navigation
- Optimized typography for small screens
- Properly sized tap targets

## 🔒 Security

- No external dependencies or CDNs
- No user data collection
- Uses HTTPS when deployed on Vercel
- No inline scripts or styles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Next Steps

After deployment, consider:
- Adding Google Analytics
- Setting up a custom domain
- Adding a contact form
- Implementing a blog section
- Adding more interactive elements

---

**Happy coding!** 🎉

If you need help or have questions, feel free to reach out or check the troubleshooting section above.