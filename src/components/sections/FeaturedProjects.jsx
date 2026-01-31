"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import FadeIn from "components/animations/FadeIn";
import { BentoGrid, BentoGridItem } from "components/ui/BentoGrid";
import Container from "components/ui/Container";
import { getFeaturedProjects } from "lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects().slice(0, 4); // Take top 4 for bento

  return (
    <section id="projects" className="py-32 bg-background relative">
      <Container>
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Selected Works</h2>
                <p className="text-base-content/60 max-w-xl text-lg">
                  A curated selection of projects demonstrating technical excellence and design precision.
                </p>
             </div>
             <Link href="/work" className="text-primary hover:text-primary/80 flex items-center gap-2 group">
                View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
             </Link>
          </div>
        </FadeIn>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
          {featuredProjects.map((project, i) => (
            <BentoGridItem
              key={project.id}
              title={project.title}
              description={project.description}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              header={
                <Link href={`/work/${project.slug}`} className="block h-full w-full relative overflow-hidden rounded-xl border border-white/5 group-hover/bento:border-primary/50 transition-colors">
                   <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/bento:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/50 group-hover/bento:bg-black/20 transition-colors duration-500" />
                   
                   <div className="absolute top-4 right-4 opacity-0 group-hover/bento:opacity-100 transition-opacity">
                      <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-white">
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </div>
                   </div>
                </Link>
              }
              icon={
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                            {t}
                        </span>
                    ))}
                </div>
              }
            />
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
