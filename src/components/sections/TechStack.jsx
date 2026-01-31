"use client";

import FadeIn from "components/animations/FadeIn";
import Container from "components/ui/Container";
import SpotlightCard from "components/ui/SpotlightCard";

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      icon: "🎨",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
      icon: "⚙️",
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[20rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 text-white">Technical Arsenal</h2>
            <p className="text-base-content/60 max-w-2xl mx-auto">
              The tools and technologies I use to bring digital visions to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <FadeIn key={tech.category} delay={index * 0.1}>
              <SpotlightCard className="h-full p-8 border-white/5 bg-white/5">
                <div className="text-4xl mb-6">{tech.icon}</div>
                <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/10 text-base-content/80 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
