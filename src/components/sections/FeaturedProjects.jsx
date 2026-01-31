import FadeIn from "components/animations/FadeIn";
import Badge from "components/ui/Badge";
import Button from "components/ui/Button";
import Card, { CardBody, CardTitle } from "components/ui/Card";
import Container from "components/ui/Container";
import { getFeaturedProjects } from "lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 bg-base-200">
      <Container>
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Featured Work</h2>
          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in full-stack
            development, problem-solving, and creating impactful web
            applications.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card>
                <figure className="relative h-64 bg-base-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </figure>

                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-base-content/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <Link href={`/work/${project.slug}`}>
                      <Button variant="ghost" size="sm">
                        View Case Study →
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/work">
              <Button variant="primary" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
