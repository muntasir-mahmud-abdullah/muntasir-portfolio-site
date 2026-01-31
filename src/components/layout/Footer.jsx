import MagneticButton from "components/ui/MagneticButton";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/muntasir-mahmud-abdullah", label: "GitHub" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muntasir-mahmud-abdullah47", label: "LinkedIn" },
    { name: "Twitter", href: "https://twitter.com/yourusername", label: "Twitter" },
    { name: "Email", href: "mailto:muntasirm525@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-heading text-white mb-6 block">
              MM<span className="text-primary">.</span>
            </Link>
            <p className="text-base-content/60 max-w-sm text-lg mb-8">
              Engineering digital experiences with precision and passion. 
              Bridging the gap between complex systems and intuitive design.
            </p>
            <div className="flex gap-4">
               {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base-content/60 hover:text-white transition-colors"
                  >
                      <MagneticButton className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 text-sm">
                          {link.label}
                      </MagneticButton>
                  </a>
               ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                 <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-base-content/60 hover:text-primary transition-colors block">
                        {item}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Services/Tags */}
          <div>
            <h4 className="font-bold text-white mb-6">Expertise</h4>
             <ul className="space-y-4">
              {['Full-Stack Development', 'UI/UX Engineering', 'Water Resources', 'System Architecture'].map((item) => (
                 <li key={item} className="text-base-content/60 cursor-default">
                    {item}
                 </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/40">
          <p>
            &copy; {currentYear} Muntasir Mahmud. All rights reserved.
          </p>
          <p>
            Designed with <span className="text-primary">Digital Noir</span> aesthetic.
          </p>
        </div>
      </div>
    </footer>
  );
}
