# Portfolio Site

A modern, high-performance portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Modern UI**: DaisyUI components with smooth Framer Motion animations
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt configuration
- **Performance First**: Optimized images, code splitting, and fast load times
- **Accessible**: WCAG AA compliant with keyboard navigation and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Icons**: Heroicons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── about/           # About page
│   ├── work/            # Projects listing and case studies
│   ├── contact/         # Contact page with form
│   ├── api/contact/     # Contact form API route
│   ├── layout.js        # Root layout 
│   ├── page.js          # Homepage
│   ├── sitemap.js       # SEO sitemap
│   └── robots.js        # Robots.txt
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Homepage sections
│   └── animations/      # Animation wrappers
└── lib/                 # Data and utilities
    └── projects.js      # Project data
```

## 🎨 Customization

1. **Personal Information**: Replace `[Your Name]` throughout the codebase
2. **Projects**: Update `src/lib/projects.js` with your real projects
3. **Images**: Add project screenshots to `/public/images/projects/`
4. **Social Links**: Update links in `src/components/layout/Footer.jsx` and `src/components/layout/Header.jsx`
5. **Contact Form**: Integrate with email service (Resend, SendGrid) in `src/app/api/contact/route.js`
6. **Domain**: Update all instances of `https://yoursite.com` with your actual domain

## 📧 Contact Form Setup

To enable the contact form:

1. Install Resend (or your preferred email service):
   ```bash
   npm install resend
   ```

2. Add API key to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

3. Uncomment the email sending code in `src/app/api/contact/route.js`

## 🚀 Deployment

Deploy to Vercel:

```bash
# Connect your GitHub repository to Vercel
# Or use Vercel CLI
npm install -g vercel
vercel
```

## 📝 License

MIT

## 👤 Author

[Your Name] - Full-Stack Developer

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com
