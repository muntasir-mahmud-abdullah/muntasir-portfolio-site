import FadeIn from '@/components/animations/FadeIn';
import Container from '@/components/ui/Container';

export const metadata = {
    title: 'About | [Your Name]',
    description: 'Learn about my journey from Water Resources Engineering to Full-Stack Development.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen py-20">
            <Container>
                {/* Header */}
                <FadeIn>
                    <h1 className="text-5xl font-bold mb-6">About Me</h1>
                    <p className="text-xl text-base-content/70 mb-12 max-w-3xl">
                        A Water Resources Engineer turned Full-Stack Developer, building technology solutions with purpose and impact.
                    </p>
                </FadeIn>

                {/* My Story */}
                <section className="mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl font-bold mb-6">My Story</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-base-content/80 mb-4">
                                My journey into web development started from an unexpected place: <strong>Water Resources Engineering</strong> at CUET.
                                While studying infrastructure, hydrology, and sustainable systems, I discovered a passion for solving complex problems—not just with physical infrastructure, but with code.
                            </p>
                            <p className="text-base-content/80 mb-4">
                                What began as curiosity about programming quickly evolved into a deep commitment to mastering the <strong>MERN stack</strong>.
                                Over the past 6 months, I've worked on real-world projects during my internship, building everything from e-commerce platforms
                                to data management systems. Each project taught me not just about React, Node.js, or MongoDB, but about discipline,
                                problem-solving, and the importance of writing clean, maintainable code.
                            </p>
                            <p className="text-base-content/80">
                                Today, I stand at the intersection of two worlds: engineering systems and engineering software.
                                My goal is to use technology to address critical challenges—especially in water resource management, sustainability,
                                and infrastructure—across Bangladesh and the Gulf region.
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Why I Do This Work */}
                <section className="mb-16 bg-base-200 p-8 rounded-lg">
                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl font-bold mb-6">Why I Do This Work</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-base-content/80 mb-4">
                                Beyond the code and the challenge, I'm driven by a deeper purpose: using technology to create <strong>meaningful, sustainable impact</strong>.
                            </p>
                            <p className="text-base-content/80 mb-4">
                                My background in Water Resources Engineering taught me to think systemically—to see the interconnectedness of infrastructure,
                                communities, and resources. Now, I apply that same systems thinking to web development, building tools that serve real people
                                and solve real problems.
                            </p>
                            <p className="text-base-content/80">
                                I'm guided by principles of <strong>integrity, discipline, and service</strong>. Whether it's optimizing a user experience,
                                improving accessibility, or contributing to open-source, I aim to leave things better than I found them. My long-term vision
                                is to bridge technology and water resource challenges—using AI and modern web platforms to improve sustainability, access,
                                and resilience.
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Experience Snapshot */}
                <section className="mb-16">
                    <FadeIn delay={0.3}>
                        <h2 className="text-3xl font-bold mb-6">Experience Snapshot</h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="text-xl font-semibold">Full-Stack Developer Intern</h3>
                                <p className="text-base-content/70">6-Month Internship (5 months completed)</p>
                                <p className="text-base-content/80 mt-2">
                                    Working on real-world MERN stack projects including e-commerce platforms, inventory management systems,
                                    and customer-facing web applications. Gained hands-on experience in full development lifecycle from
                                    planning to deployment.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="text-xl font-semibold">Water Resources Engineering Student</h3>
                                <p className="text-base-content/70">CUET</p>
                                <p className="text-base-content/80 mt-2">
                                    Studying infrastructure systems, hydrology, and sustainable resource management.
                                    Interested in applying AI and programming to water-related challenges in Bangladesh and Gulf countries.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* What's Next */}
                <section>
                    <FadeIn delay={0.4}>
                        <h2 className="text-3xl font-bold mb-6">What's Next</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-base-content/80 mb-4">
                                I'm currently in my final year at CUET, balancing my studies with real-world development work.
                                My immediate goal is to transition fully into IT and web development while building a sustainable income through
                                freelance and remote opportunities.
                            </p>
                            <p className="text-base-content/80 mb-4">
                                Long-term, I'm passionate about the <strong>intersection of technology and water resource management</strong>—exploring
                                how AI, data platforms, and modern web tools can address critical infrastructure challenges in Bangladesh and Gulf countries.
                            </p>

                            <h3 className="font-semibold text-lg mb-2">I'm open to:</h3>
                            <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                <li>Remote full-stack developer roles</li>
                                <li>Freelance projects (MERN stack, Next.js, frontend)</li>
                                <li>Collaborations on impact-driven tech initiatives</li>
                                <li>Research partnerships in water tech + AI</li>
                            </ul>

                            <p className="text-base-content/80 mt-6">
                                <strong>Let's build something meaningful together.</strong>
                            </p>
                        </div>
                    </FadeIn>
                </section>
            </Container>
        </main>
    );
}
