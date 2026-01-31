// Sample project data - replace with your real projects
export const projects = [
    {
        id: 1,
        slug: 'e-commerce-platform',
        title: 'E-Commerce Platform',
        description: 'Full-stack MERN e-commerce application with real-time inventory management and payment integration.',
        image: '/images/projects/ecommerce.jpg', // Add your project image
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        category: 'Full-Stack',
        liveLink: 'https://demo.example.com',
        githubLink: 'https://github.com/yourusername/project',
        featured: true,
    },
    {
        id: 2,
        slug: 'water-management-system',
        title: 'Water Resource Management System',
        description: 'Dashboard for monitoring and analyzing water resource data with real-time alerts and predictive analytics.',
        image: '/images/projects/water-system.jpg',
        tech: ['Next.js', 'MongoDB', 'Chart.js', 'Node.js'],
        category: 'Full-Stack',
        liveLink: 'https://water-demo.example.com',
        githubLink: 'https://github.com/yourusername/water-project',
        featured: true,
    },
    {
        id: 3,
        slug: 'task-management-app',
        title: 'Task Management Application',
        description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
        image: '/images/projects/task-app.jpg',
        tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
        category: 'Frontend',
        liveLink: 'https://tasks-demo.example.com',
        githubLink: 'https://github.com/yourusername/tasks',
        featured: true,
    },
    {
        id: 4,
        slug: 'portfolio-website',
        title: 'Personal Portfolio',
        description: 'Modern, responsive portfolio website built with Next.js, showcasing projects and technical skills.',
        image: '/images/projects/portfolio.jpg',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'DaisyUI'],
        category: 'Frontend',
        liveLink: 'https://yoursite.com',
        githubLink: 'https://github.com/yourusername/portfolio',
        featured: false,
    },
];

export function getAllProjects() {
    return projects;
}

export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}

export function getProjectBySlug(slug) {
    return projects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category) {
    if (category === 'All') return projects;
    return projects.filter(project => project.category === category);
}
