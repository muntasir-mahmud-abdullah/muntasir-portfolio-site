import FadeIn from "components/animations/FadeIn";
import Badge from "components/ui/Badge";
import Container from "components/ui/Container";

export default function TechStack() {
  const techStack = {
    frontend: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'DaisyUI', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'Figma'],
  };

  return (
    <section className="py-20 bg-base-100">
      <Container>
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">Tech Stack & Tools</h2>
          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <FadeIn delay={0.1}>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Backend */}
          <FadeIn delay={0.2}>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.3}>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
