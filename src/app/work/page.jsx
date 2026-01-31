'use client';

import FadeIn from '@/components/animations/FadeIn';
import Badge from '@/components/ui/Badge';
import Card, { CardBody, CardTitle } from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';
import { useState } from 'react';

export default function WorkPage() {
  const [filter, setFilter] = useState('All');
  const projects = getAllProjects();
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

  return (
    <main className="min-h-screen py-20">
      <Container>
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">My Work</h1>
          <p className="text-xl text-base-content/70 mb-12 max-w-3xl">
            A collection of projects showcasing my full-stack development skills,
            problem-solving abilities, and passion for creating impactful web applications.
          </p>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`btn ${filter === category ? 'btn-primary' : 'btn-outline'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card>
                <figure className="relative h-48 bg-base-300">
                  <div className="w-full h-full flex items-center justify-center text-base-content/30">
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </figure>

                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-base-content/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="default">+{project.tech.length - 3}</Badge>
                    )}
                  </div>

                  <div className="card-actions justify-between items-center">
                    <Link href={`/work/${project.slug}`} className="btn btn-ghost btn-sm">
                      View Case Study →
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
