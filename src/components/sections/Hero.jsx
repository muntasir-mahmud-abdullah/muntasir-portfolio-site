"use client";

import FadeIn from "components/animations/FadeIn";
import MagneticButton from "components/ui/MagneticButton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-md">
                Available for New Projects
              </span>
            </motion.div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold font-heading tracking-tight mb-8 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Building
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                Digital Futures
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-base-content/60 max-w-2xl mx-auto mb-12 font-light">
              Muntasir Mahmud. Full-Stack Developer engineering 
              <span className="text-white font-medium"> scalable solutions </span> 
              for water resources and the web.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/work" onClick={scrollToProjects}>
                <MagneticButton className="btn btn-primary btn-lg rounded-full px-8 text-black border-none hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-shadow">
                  View My Work
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton className="btn btn-outline btn-lg rounded-full px-8 text-white border-white/20 hover:bg-white/10 hover:border-white/50 backdrop-blur-md">
                  Let's Connect
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
