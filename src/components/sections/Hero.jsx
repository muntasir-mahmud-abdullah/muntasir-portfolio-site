"use client";

import FadeIn from "components/animations/FadeIn";
import ParticleField from "components/canvas/ParticleField";
import HexagonProfile from "components/ui/HexagonProfile";
import MagneticButton from "components/ui/MagneticButton";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaEnvelope />, href: "mailto:muntasirm525@gmail.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20 lg:pt-0">
      {/* 3D Particle Background */}
      <ParticleField />
      
      {/* Background Gradient Mesh (Fallback/Overlay) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <FadeIn>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide uppercase">
                Hello, I'm
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-4 text-white leading-tight">
                Muntasir <span className="text-primary">Mahmud</span>
              </h1>
              <h3 className="text-2xl sm:text-3xl font-medium text-base-content/80 mb-6">
                And I'm a <span className="text-primary">MERN Stack Developer</span>
              </h3>
              <p className="text-base-content/60 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                I engineer scalable web applications with a focus on performance and user experience. 
                Combining technical precision with creative problem-solving to build digital solutions that matter.
              </p>
              
              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-4 mb-10">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center text-lg"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 <a href="/resume.pdf" download>
                    <MagneticButton className="btn btn-primary rounded-full px-8 text-black border-none font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow">
                      Download CV
                    </MagneticButton>
                 </a>
                 <Link href="/work" onClick={scrollToProjects}>
                    <MagneticButton className="btn btn-outline rounded-full px-8 text-white border-primary text-primary hover:bg-primary/10 hover:border-primary transition-all">
                      View Portfolio
                    </MagneticButton>
                 </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Hexagon Profile */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <FadeIn delay={0.2}>
               <HexagonProfile />
             </FadeIn>
          </div>

        </div>
      </div>
      
      {/* CSS for Hexagon */}
      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
}
