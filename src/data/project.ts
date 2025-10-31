export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    link: string;
    longDescription: string;
    features?: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern and interactive personal portfolio website showcasing my professional work, projects, and skills. Built with Vite and React.js for optimal performance.",
        longDescription: `This project is a culmination of my front-end development skills, serving as a dynamic, single-page application (SPA) built entirely with a modern stack.

Key highlights include:
- **Performance:** Leveraging Vite's build speed and HMR for a lightning-fast development experience and optimized production bundles.
- **Styling:** Implementation of **Tailwind CSS** for utility-first styling, ensuring a highly responsive design across all devices.
- **Interactivity:** Use of **Framer Motion** to create smooth, eye-catching scroll-based and click animations, enhancing the overall user experience.
- **Routing:** Complex nested routes are managed efficiently using **React Router DOM v6** (as demonstrated by the project detail page itself).
- **Architecture:** Organized component-based structure using **TypeScript** for strong type checking and maintainability.
\nThis website is continuously updated as a living testament to my evolving skills.`,
        features: [
            "Single Page Application (SPA) architecture for seamless navigation.",
            "Responsive design ensuring optimal viewing on all devices.",
            "Dynamic project detail pages with routing.",
            "Smooth animations and transitions using Framer Motion."
        ],
        image: "https://res.cloudinary.com/dfhbzmhxb/image/upload/v1761916300/portfolio/cursorful-video-1761915508555_2_xjzuby.gif",
        tags: [
            "Vite + React.js",
            "Tailwind CSS",
            "TypeScript",
            "Shadcn UI",
            "Framer Motion",
            "Dynamic Routing"
        ],
        github: "https://github.com/Bhavesh-0909/personal-portfolio",
        link: "https://bhaveshchoudhary.me/"
    },
];