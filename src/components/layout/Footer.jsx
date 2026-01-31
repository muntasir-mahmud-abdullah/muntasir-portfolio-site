import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: '📦' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: '🐦' },
    { name: 'Email', href: 'mailto:your.email@example.com', icon: '✉️' },
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">[Your Name]</h3>
            <p className="text-base-content/70">
              Full-Stack Developer building scalable web applications for impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-base-content/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-base-content/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/work" className="text-base-content/70 hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/contact" className="text-base-content/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-8 text-center text-base-content/60">
          <p>&copy; {currentYear} [Your Name]. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
