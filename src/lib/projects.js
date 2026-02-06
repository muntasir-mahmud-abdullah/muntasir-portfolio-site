// Sample project data - replace with your real projects
export const projects = [
    {
        "id": 1,
        "slug": "shopera-sports-ecommerce",
        "title": "Shopera — MERN E-Commerce (Production-Ready)",
        "description": "Full-stack MERN e-commerce platform focused on production constraints: secure auth, server-side role checks, serverless-safe media uploads, robust admin controls, search, filtering, pagination, and order workflows.",
        "image": "/images/projects/shopera1.png",
        "tech": [
            "React",
            "Tailwind CSS",
            "Context API",
            "Node.js",
            "Express",
            "MongoDB (Mongoose)",
            "Firebase Auth",
            "Cloudinary",
            "Multer (memory)",
            "Axios",
            "Vercel"
        ],
        "category": "Full-Stack",
        "liveLink": "https://shopera-ecommerce-client.vercel.app",
        "githubLink": "https://github.com/muntasir-mahmud-abdullah/ecommerce-mern",
        "featured": true,
        "challenge": "Make a real-world e-commerce app that works reliably in serverless deployments (Vercel), handles media safely, enforces server-side auth/authorization, and scales UX features (search, pagination) without compromising security or deployability.",
        "solution": "Built a production-oriented MERN architecture with Firebase for identity and server-side token verification for authorization. Replaced local file uploads with Multer (memory) → stream → Cloudinary to avoid disk usage and CORS problems. Added server-side guards (isAdmin, ban checks), robust error handling for uploads and auth, and URL-driven search + server pagination so front-end state is shareable/bookmarkable. Implemented `purchaseCount` to drive a Trending section and cleaned up image lifecycle by storing `public_id` and deleting old images on update/delete.",
        "keyFeatures": [
            "Firebase Authentication with server-side token verification (secure API access)",
            "Serverless-safe image uploads: Multer (memory) → streamifier → Cloudinary (store secure_url + public_id)",
            "Product CRUD with image replace/delete and Cloudinary cleanup",
            "Search, filtering and server-side pagination (page & limit) with frontend controls",
            "Debounced live search bar with dropdown suggestions (URL-based for shareable queries)",
            "Cart (Context API) + checkout → order creation (stock decrement + purchaseCount increment)",
            "PurchaseCount metric powering 'Trending This Week' and admin 'Sold' column",
            "Admin dashboard: product, order, and user management (ban/unban + delivery status)",
            "Robust upload validation & error handling (Multer limits, friendly 400/409/403 responses)",
            "Vercel-safe deployment with environment-driven theming for brand/tenant variations"
        ],
        "role": "Full-Stack Developer (intern → production tasks)",
        "timeline": "Iterative (multiple sprints) — initial 16-hour roadmap extended with additional feature sprints (search, pagination, Cloudinary refactor, admin flows)",
        "keyOutcome": "Production-ready e-commerce foundation: serverless-safe media handling, secure server-side authorization, improved UX (search/pagination/trending), and maintainable admin controls. Ready for branding as a sports storefront with minimal theming work.",
        "screenshots": [
            "/images/projects/shopera2.png",
            "/images/projects/shopera3.png",
            "/images/projects/shopera4.png",
        ]
    },

    {
        "id": 2,
        "slug": "learnify-tutor-platform",
        "title": "Learnify — Tutor Booking & Tutorial Management (MERN)",
        "description": "A full-stack tutor discovery and booking platform that lets students find language tutors, book live sessions, and lets tutors publish & manage tutorials. Focuses on secure auth (Firebase + JWT), resilient user provisioning, clear role-based flows, and a polished responsive UI built with Tailwind + DaisyUI.",
        "image": "/images/projects/learnify1.png",
        "tech": [
            "React (Vite)",
            "Tailwind CSS",
            "DaisyUI",
            "Framer Motion",
            "Firebase Authentication",
            "Node.js",
            "Express.js",
            "MongoDB (native driver)",
            "JWT (HTTP-only cookie)",
            "Axios",
            "React Router"
        ],
        "category": "Full-Stack / Frontend-First",
        "liveLink": "https://learnify-5acd7.web.app",
        "githubLink": "https://github.com/muntasir-mahmud-abdullah/learnify-client",
        "featured": true,
        "challenge": "Make authentication and user provisioning reliable across Firebase and a custom backend: first-time Google users must get a MongoDB profile, protected routes must validate server-issued JWT cookies, and the frontend must gracefully handle timing/race conditions between sign-in and backend writes. Also ensure a consistent, responsive UI and safe server-side guards.",
        "solution": "Used Firebase for identity and issued server-side JWTs (HTTP-only cookies) for API access. Implemented backend upsert logic for `/register` to guarantee user documents for first-time Google sign-ins. On the frontend added robust fetch logic with a single retry for `/user-profile` to avoid transient 404s. Created a JWT verification middleware in Express to protect routes and used `withCredentials` + correct CORS config to make cookies work in deployment. Kept UI consistent with Tailwind + DaisyUI, added Framer Motion for micro-interactions, and centralized auth state via context.",
        "keyFeatures": [
            "Email/password + Google Sign-In via Firebase with server-side JWT exchange (HTTP-only cookie)",
            "Backend `register` endpoint uses upsert to ensure first-time social users get a user doc",
            "JWT verification middleware protecting routes such as `/my-tutorials`, `/booked-tutors`, and tutorial CRUD",
            "Tutor listing with category filtering and optional server-side sorting (only when requested)",
            "Tutor CRUD: Add, Update, Delete tutorials (protected endpoints)",
            "Booking flow: students can book tutors; server prevents duplicate bookings and returns friendly errors",
            "Robust frontend handling for race conditions (retry on 404, silent handling of expected 400/409)",
            "Responsive, theme-aware UI using Tailwind + DaisyUI and subtle animations via Framer Motion",
            "Profile integration: Navbar shows user name & avatar fetched from `/user-profile`",
            "Developer-friendly error handling and clear API responses (400/401/403/409/500) for UX clarity"
        ],
        "role": "Full-Stack Developer (Frontend-focused) — implemented UI components, auth flow, API integration, and debugging/production fixes",
        "timeline": "Iterative sprints — MVP (authentication, listings, booking) in initial sprint; follow-ups added profile upsert, JWT middleware, retry logic, and UX polish across multiple short sprints.",
        "keyOutcome": "A production-ready tutor booking foundation that reliably handles social sign-ins, protects API routes with server-side JWTs, and provides a polished, responsive frontend UX. Edge cases (first-time social users, duplicate bookings, deployed cookie behavior) were identified and resolved, improving stability in both local and deployed environments.",
        "screenshots": [
            "/images/projects/learnify2.png",
            "/images/projects/learnify3.png",
            "/images/projects/learnify4.png",
        ]
    },
    // {
    //     "id": 3,
    //     "slug": "employee-management-system",
    //     "title": "Employee Management System — Role-Based HR & Payroll Platform",
    //     "description": "A production-style employee management platform with role-based dashboards (Admin, HR, Employee), secure authentication, payroll workflows, task tracking, and responsive UI with dark mode support.",
    //     "image": "https://placehold.co/1200x800/0c1222/818cf8?text=Employee+Management+System",
    //     "tech": [
    //         "React",
    //         "React Router",
    //         "Tailwind CSS",
    //         "DaisyUI",
    //         "Firebase Authentication",
    //         "JWT",
    //         "Axios",
    //         "TanStack Query",
    //         "Node.js",
    //         "Express",
    //         "MongoDB (Native Driver)",
    //         "SweetAlert2",
    //         "React Toastify",
    //         "Vercel"
    //     ],
    //     "category": "Full-Stack",
    //     "liveLink": "https://employee-management-4bde3.web.app",
    //     "githubLink": "https://github.com/muntasir-mahmud-abdullah/employee-management-client",
    //     "featured": true,
    //     "challenge": "Designing a real-world HR system with strict role separation, secure payroll actions, disabled-account enforcement, and a professional dashboard UX that scales across devices and supports dark mode.",
    //     "solution": "Implemented Firebase authentication with JWT-protected APIs and role-based route guards to ensure secure access control. Built separate dashboards for Admin, HR, and Employees with tailored permissions. Added payroll workflows with verification, payment history, and duplicate-prevention logic. Designed a responsive, dark-mode-compatible UI using Tailwind and DaisyUI, enhanced with alerts and toasts for professional UX feedback.",
    //     "keyFeatures": [
    //         "Role-based dashboards for Admin, HR, and Employee with protected routing",
    //         "Employee task management with date, hours, edit/delete actions, and real-time updates",
    //         "Payroll system with HR verification, admin approval, and payment history tracking",
    //         "Admin controls: role assignment, salary updates (increase-only), and account disable (fire)",
    //         "Secure authentication with Firebase + JWT and Google OAuth support",
    //         "Responsive, dark-mode-enabled UI with professional alerts and feedback"
    //     ],
    //     "role": "Full-Stack Developer",
    //     "timeline": "Dec 2024 – Feb 2025 (iterative feature-driven development)",
    //     "keyOutcome": "A recruiter-ready, production-style HR & payroll system demonstrating real-world authorization logic, clean dashboard UX, and scalable frontend architecture suitable for professional frontend roles.",
    //     "screenshots": [
    //         "https://placehold.co/1200x800/0c1222/818cf8?text=Employee+Dashboard",
    //         "https://placehold.co/1200x800/0c1222/818cf8?text=Admin+Dashboard",
    //         "https://placehold.co/1200x800/0c1222/818cf8?text=HR+Dashboard"
    //     ]
    // },
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
