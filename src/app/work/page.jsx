"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import FadeIn from "components/animations/FadeIn";
import Container from "components/ui/Container";
import MagneticButton from "components/ui/MagneticButton";
import { getAllProjects } from "lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const projects = getAllProjects();

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  return (
    <main className="min-h-screen py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-[30rem] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <Container>
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-white">
            Selected <span className="text-primary">Works</span>
          </h1>
          <p className="text-xl text-base-content/70 mb-16 max-w-2xl">
            A showcase of my technical journey. Each project represents a unique challenge solved with clean code and modern architecture.
          </p>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <MagneticButton
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-black border-primary font-semibold"
                    : "bg-transparent text-base-content/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </MagneticButton>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid - Masonry/Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link 
                href={`/work/${project.slug}`}
                className="group block relative h-[28rem] rounded-2xl overflow-hidden border border-white/5 bg-base-200/50 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Image Section */}
                <div className="absolute inset-0 h-full w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="text-xs font-medium px-2 py-1 rounded bg-white/10 backdrop-blur-md text-white border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    
                    <p className="text-base-content/80 line-clamp-2 mb-4 group-hover:text-white transition-colors">
                        {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-medium text-sm border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        View Case Study <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
