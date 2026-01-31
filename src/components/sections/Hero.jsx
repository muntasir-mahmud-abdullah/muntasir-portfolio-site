'use client';

import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative bg-gradient-to-br from-base-100 via-base-200 to-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary">[Your Name]</span> 👋
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-2xl sm:text-3xl text-base-content/90 font-semibold mb-4">
              Full-Stack Developer Building the Future, One Line at a Time
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto mb-8">
              I create fast, accessible, and beautiful web applications using the MERN stack.
              From water resource tech to modern e-commerce, I solve real-world problems with code.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <button
              onClick={scrollToProjects}
              className="mt-16 animate-bounce text-base-content/50 hover:text-primary transition-colors"
              aria-label="Scroll to projects"
            >
              <ChevronDoubleDownIcon className="h-8 w-8 mx-auto" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
