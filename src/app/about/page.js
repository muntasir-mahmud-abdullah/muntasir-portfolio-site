import FadeIn from "components/animations/FadeIn";
import { BentoGrid } from "components/ui/BentoGrid";
import Container from "components/ui/Container";
import MagneticButton from "components/ui/MagneticButton";
import SpotlightCard from "components/ui/SpotlightCard";
import Link from "next/link";

export const metadata = {
    title: 'About | Muntasir Mahmud',
    description: 'Learn about my journey from Water Resources Engineering to Full-Stack Development.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <Container>
                {/* Header */}
                <FadeIn>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 text-white">
                        About <span className="text-primary">Me</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-base-content/70 mb-16 max-w-3xl leading-relaxed">
                        A Water Resources Engineer turned Full-Stack Developer, combining systems thinking with creative coding to build <span className="text-white">impactful digital experiences</span>.
                    </p>
                </FadeIn>

                <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] mb-20">
                    {/* Story Block - Large */}
                    <div className="md:col-span-2 md:row-span-2 rounded-xl p-8 md:p-12 border border-white/10 bg-base-200/50 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-3xl font-bold font-heading mb-6 text-white relative z-10">The Journey</h2>
                        <div className="space-y-4 text-base-content/80 relative z-10 text-lg leading-relaxed">
                            <p>
                                My path wasn't linear. It started at <strong>CUET</strong>, studying Water Resources Engineering. While modeling hydrology and infrastructure, I discovered that the logic used to solve physical problems applies perfectly to digital ones.
                            </p>
                            <p>
                                What started as a curiosity about programming quickly evolved into a passion for the <strong>MERN stack</strong>. Over the last 6 months, I've dived deep into building real-world applications, translating complex engineering principles into clean, efficient code.
                            </p>
                            <p>
                                Today, I bridge the gap between hard engineering and software development, aiming to solve critical challenges in sustainability and infrastructure through technology.
                            </p>
                        </div>
                    </div>

                    {/* Stats/Quick Info */}
                    <SpotlightCard className="p-8 flex flex-col justify-center items-center text-center bg-base-200/30">
                        <div className="text-5xl font-bold text-primary mb-2">CUET</div>
                        <div className="text-sm uppercase tracking-widest text-base-content/60">Alma Mater</div>
                    </SpotlightCard>

                    <SpotlightCard className="p-8 flex flex-col justify-center items-center text-center bg-base-200/30">

                        <div className="text-5xl font-bold text-secondary mb-2">6+</div>
                        <div className="text-sm uppercase tracking-widest text-base-content/60">Months Exp</div>
                    </SpotlightCard>

                    {/* Values */}
                    <div className="md:col-span-2 p-8 rounded-xl border border-white/10 bg-base-200/30 backdrop-blur-sm">
                        <h3 className="text-xl font-bold font-heading mb-6 text-white">Core Values</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-primary font-bold mb-2">Systems Thinking</h4>
                                <p className="text-sm text-base-content/70">Seeing the big picture and how components interact.</p>
                            </div>
                            <div>
                                <h4 className="text-primary font-bold mb-2">Impact First</h4>
                                <p className="text-sm text-base-content/70">Building technology that solves real human problems.</p>
                            </div>
                            <div>
                                <h4 className="text-primary font-bold mb-2">Continuous Growth</h4>
                                <p className="text-sm text-base-content/70">Always learning, adapting, and refining my craft.</p>
                            </div>
                        </div>
                    </div>
                </BentoGrid>

                {/* Experience Section */}
                <FadeIn delay={0.2}>
                    <h2 className="text-3xl font-bold font-heading mb-12 text-white border-l-4 border-primary pl-4">Experience Timeline</h2>
                    <div className="space-y-12 border-l border-white/10 ml-2 md:ml-4 pl-8 md:pl-12 relative">
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-2xl font-bold text-white">Full-Stack Developer Intern</h3>
                            <div className="text-primary font-mono text-sm mb-4">Present • 6 Month Internship</div>
                            <p className="text-base-content/70 max-w-2xl text-lg">
                                Developing comprehensive web applications using the MERN stack. specialized in building e-commerce platforms and inventory management systems. Gaining mastery in React hooks, Node.js APIs, and MongoDB aggregation.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-base-content/20 border-4 border-background" />
                            <h3 className="text-2xl font-bold text-white">Water Resources Engineering Student</h3>
                            <div className="text-base-content/50 font-mono text-sm mb-4">CUET</div>
                            <p className="text-base-content/70 max-w-2xl text-lg">
                                Rigorous training in fluid mechanics, hydrology, and environmental engineering. Developed strong analytical and mathematical modeling skills that I now apply to algorithm design and backend logic.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold mb-8 text-white">Ready to build something amazing?</h3>
                    <Link href="/contact">
                        <MagneticButton className="btn btn-primary btn-lg rounded-full px-12">
                            Let's Talk
                        </MagneticButton>
                    </Link>
                </div>
            </Container>
        </main>
    );
}
