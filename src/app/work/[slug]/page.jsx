import { ArrowLeftIcon, CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import FadeIn from "components/animations/FadeIn";
import Container from "components/ui/Container";
import MagneticButton from "components/ui/MagneticButton";
import SpotlightCard from "components/ui/SpotlightCard";
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
    <main className="min-h-screen bg-background text-base-content selection:bg-primary selection:text-black">
      {/* Full Screen Hero with Image Background */}
      <section className="relative h-[80vh] flex items-end">
          <div className="absolute inset-0 z-0">
             <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover opacity-50"
                priority 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          </div>

          <Container className="relative z-10 pb-20">
             <FadeIn>
                <Link href="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 group">
                   <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                   Back to Works
                </Link>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                        {project.category}
                    </span>
                    {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm">
                            {t}
                        </span>
                    ))}
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-6 leading-none">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                             <MagneticButton className="btn btn-primary btn-lg rounded-full px-8 text-black border-none gap-2">
                                <GlobeAltIcon className="h-5 w-5" /> Visit Live Site
                             </MagneticButton>
                        </a>
                    )}
                    {project.githubLink && (
                         <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                             <MagneticButton className="btn btn-outline btn-lg rounded-full px-8 text-white border-white/20 gap-2 hover:bg-white/10">
                                <CodeBracketIcon className="h-5 w-5" /> View Code
                             </MagneticButton>
                         </a>
                    )}
                </div>
             </FadeIn>
          </Container>
      </section>

      <Container>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-20">
             {/* Main Content */}
             <div className="lg:col-span-2 space-y-20">
                 <FadeIn delay={0.2}>
                    <section className="prose prose-xl prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:text-base-content/70 prose-a:text-primary">
                        <h2>The Challenge</h2>
                        <p>
                           [Describe the challenge or opportunity this project addressed.
                           What was the gap, need, or pain point? Who was affected, and why
                           did this matter?]
                        </p>
                        
                        <h2>My Solution</h2>
                         <p>
                           [Explain your strategic thinking before diving into tech. How did
                           you break down the problem? What were the key technical decisions?
                           Why did you choose this tech stack?]
                        </p>

                        <h3>Key Features</h3>
                        <ul>
                          <li><strong>Real-time Updates</strong>: Leveraging WebSockets for instant data reflection.</li>
                          <li><strong>Optimized Performance</strong>: Achieving 95+ Lifecycle scores through code splitting.</li>
                          <li><strong>Secure Auth</strong>: Implementation of JWT and role-based access control.</li>
                        </ul>
                    </section>
                 </FadeIn>

                 <FadeIn delay={0.4}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {[1, 2].map(i => (
                             <div key={i} className="h-64 bg-base-200/50 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-base-content/30 italic">Detailed Screenshot {i}</span>
                             </div>
                         ))}
                     </div>
                 </FadeIn>
             </div>

             {/* Sidebar Info */}
             <div className="space-y-8">
                 <FadeIn delay={0.3}>
                     <SpotlightCard className="p-8 bg-base-200/20 backdrop-blur-md sticky top-32">
                        <h3 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">
                            Project Info
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-base-content/50 mb-1">Role</h4>
                                <div className="text-white font-medium">Full-Stack Developer</div>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-base-content/50 mb-1">Timeline</h4>
                                <div className="text-white font-medium">4 Weeks</div>
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-wider text-base-content/50 mb-1">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-base-content/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h4 className="text-sm uppercase tracking-wider text-base-content/50 mb-3">Key Outcome</h4>
                            <p className="text-emerald-400 italic">
                                "Reduced data processing time by 40% using optimized algorithms."
                            </p>
                        </div>
                     </SpotlightCard>
                 </FadeIn>
             </div>
         </div>
      </Container>

      {/* Next Project CTA */}
      <section className="py-32 border-t border-white/5 bg-black">
          <Container className="text-center">
              <FadeIn>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">Next Project</h2>
                  <Link href="/work">
                      <MagneticButton className="btn btn-outline btn-lg rounded-full px-12 text-white border-white/20 hover:border-primary hover:text-primary transition-colors">
                          View All Works
                      </MagneticButton>
                  </Link>
              </FadeIn>
          </Container>
      </section>
    </main>
  );
}
