import FeaturedProjects from "components/sections/FeaturedProjects";
import Hero from "components/sections/Hero";
import TechStack from "components/sections/TechStack";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <FeaturedProjects />
            <TechStack />
        </main>
    );
}
