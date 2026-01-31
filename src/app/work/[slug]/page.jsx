import FadeIn from "components/animations/FadeIn";
import Badge from "components/ui/Badge";
import Button from "components/ui/Button";
import Container from "components/ui/Container";
import { getAllProjects, getProjectBySlug } from "lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
// Generate metadata for each project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Muntasir Mahmud`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <Container>
        {/* Header */}
        <FadeIn>
          <Link
            href="/work"
            className="text-primary hover:underline mb-4 inline-block"
          >
            ← Back to All Projects
          </Link>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-base-content/70 mb-8">
            {project.description}
          </p>

          <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
          </div>
        </FadeIn>

        {/* Project Overview */}
        <section className="mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-base-200 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-base-content/80">Full-Stack Developer</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Category</h3>
                  <p className="text-base-content/80">{project.category}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold mb-2">Links</h3>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" size="sm">
                          View Live Site →
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          View GitHub Repo →
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Case Study Content */}
        <article className="prose prose-lg max-w-none">
          <FadeIn delay={0.2}>
            <h2>The Problem</h2>
            <p>
              [Describe the challenge or opportunity this project addressed.
              What was the gap, need, or pain point? Who was affected, and why
              did this matter?]
            </p>

            <h2>My Approach & Solution</h2>
            <p>
              [Explain your strategic thinking before diving into tech. How did
              you break down the problem? What were the key technical decisions?
              Why did you choose this tech stack?]
            </p>

            <h3>Key Features Implemented</h3>
            <ul>
              <li>
                <strong>Feature 1</strong>: Description of what it does and why
                it matters
              </li>
              <li>
                <strong>Feature 2</strong>: Description of what it does and why
                it matters
              </li>
              <li>
                <strong>Feature 3</strong>: Description of what it does and why
                it matters
              </li>
            </ul>

            <h3>Technical Highlights</h3>
            <p>
              <strong>Frontend Excellence</strong>: Component architecture,
              state management, responsive design, accessibility
            </p>
            <p>
              <strong>Backend Robustness</strong>: RESTful API design, database
              schema, authentication, error handling
            </p>
            <p>
              <strong>Performance Optimization</strong>: Image optimization,
              code splitting, API response improvements
            </p>

            <h2>Challenges & Solutions</h2>
            <p>
              <strong>Challenge 1</strong>: [Brief description of obstacle]
              <br />
              <strong>Solution</strong>: [How you overcame it]
              <br />
              <strong>Outcome</strong>: [Impact or learning]
            </p>

            <h2>Results & Impact</h2>
            <ul>
              <li>✅ Metric 1: Quantifiable outcome</li>
              <li>✅ Metric 2: Quantifiable outcome</li>
              <li>✅ Metric 3: Quantifiable outcome</li>
            </ul>

            <h2>Key Learnings</h2>
            <ul>
              <li>Technical insight or skill improvement</li>
              <li>Process or collaboration insight</li>
              <li>What you'd do differently</li>
            </ul>
          </FadeIn>
        </article>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Interested in working together?
            </h3>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
