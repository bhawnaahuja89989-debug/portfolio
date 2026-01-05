# 🚀 Bhawna Ahuja - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my journey as a Full Stack Developer. Features smooth animations, glassmorphism design, and a beautiful particle background.

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with animated transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 🎭 **Interactive Animations** - Powered by Framer Motion
- ✨ **Particle Background** - Dynamic star particles with theme-aware colors
- 📄 **Resume Download** - Download resume directly from navbar
- 🧭 **Smooth Navigation** - Scroll-based navbar with fade effects
- 🎯 **SEO Optimized** - Proper meta tags and structure

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: @tsparticles/react

### Features
- **Theme Management**: next-themes
- **Font**: Geist (Next.js optimized)
- **Image Optimization**: Next.js Image component

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles
│   └── providers.tsx       # Theme provider wrapper
├── components/
│   ├── NavbarSection.tsx   # Navigation bar with theme toggle
│   ├── Splash.tsx          # Animated splash screen
│   ├── Hero.tsx            # Hero section with stats
│   ├── AboutSection.tsx    # About me section
│   ├── EducationSection.tsx # Journey timeline
│   ├── SkillsSection.tsx   # Skills & tech stack (optional)
│   ├── ProjectsSection.tsx # Featured projects
│   ├── ContactSection.tsx  # Contact form & info
│   ├── FooterSection.tsx   # Footer with links
│   ├── ParticlesBackground.tsx # Animated particles
│   ├── ScrollProgressBar.tsx   # Scroll indicator
│   └── ScrollReveal.tsx    # Scroll animations wrapper
├── public/
│   ├── portfolio.png       # Portfolio project screenshot
│   ├── botpenguin.png      # BotPenguin project screenshot
│   ├── medoplus.png        # Medoplus project screenshot
│   └── resume/
│       └── Bhawna-Resume.pdf # Downloadable resume
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bhawnaahuja89989-debug/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

1. **Projects** - Edit `components/ProjectsSection.tsx`
   - Update project details, technologies, and links
   - Add your project screenshots to `/public/`

2. **About Section** - Edit `components/AboutSection.tsx`
   - Update bio, experience, and achievements

3. **Contact Info** - Edit `components/ContactSection.tsx` and `components/FooterSection.tsx`
   - Update email, social media links

4. **Resume** - Replace `/public/resume/Bhawna-Resume.pdf` with your resume

5. **Journey Timeline** - Edit `components/EducationSection.tsx`
   - Update education and work history

### Styling

- **Colors**: Update `tailwind.config.js` and `globals.css`
  - Primary color: `--color-primary: #9B5DE5` (purple)
- **Theme**: Modify theme settings in `app/providers.tsx`

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bhawnaahuja89989-debug/portfolio)

## 📝 Environment Variables

No environment variables required for basic setup. If you add features like contact form API:

## 🎯 Features Breakdown

### Splash Screen
- Animated name reveal on page load
- Smooth fade-out transition

### Navigation Bar
- Sticky navbar with scroll detection
- Fades out on scroll down, appears on scroll up
- Hamburger menu for all screen sizes
- Theme toggle with smooth animations
- Resume download button

### Hero Section
- Bold typography with gradient text
- Stats showcase (experience, projects, hours)
- Animated entrance

### About Section
- Professional bio
- Tech stack pills
- Key achievements with metrics
- "What I Bring to the Table" highlights

### Journey Timeline
- Vertical timeline with animated path
- Education and work milestones
- Gradient-colored cards with hover effects

### Projects
- Grid layout with project cards
- Project screenshots with zoom on hover
- Tech stack tags
- Live demo and source code links
- Team project indicators

### Contact Section
- Contact form (can integrate with EmailJS)
- Social media links
- Direct email link

### Footer
- Navigation links with smooth scroll
- Social media icons
- "Back to top" button
- Crafted with love message

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [Contact page](https://github.com/bhawnaahuja89989-debug/portfolio).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bhawna Ahuja**

- Portfolio: [portfolio-bhawna.vercel.app](https://portfolio-bhawna.vercel.app/)
- LinkedIn: [@bhawna-ahujaa](https://linkedin.com/in/bhawna-ahujaa)
- GitHub: [@bhawnaahuja89989-debug](https://github.com/bhawnaahuja89989-debug)
- Email: bhawnaahuja89989@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Particles.js](https://particles.js.org/) - Particle effects

---

⭐️ If you like this portfolio, give it a star on GitHub!

Made with 💜 and lots of ☕ by Bhawna Ahuja
