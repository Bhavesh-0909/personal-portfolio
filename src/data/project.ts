interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A modern and interactive personal portfolio website showcasing my professional work, projects, and skills. Built with Vite and React.js for optimal performance, styled with Tailwind CSS for responsive design, and enhanced with Shadcn UI components. Features smooth animations using Framer Motion, dynamic routing, and a clean, minimalist design that highlights my projects effectively.",
        image: "https://res.cloudinary.com/dfhbzmhxb/image/upload/v1761916300/portfolio/cursorful-video-1761915508555_2_xjzuby.gif",
        tags: [
            "Vite + React.js",
            "Tailwind CSS",
            "TypeScript",
            "Shadcn UI",
            "Framer Motion",
            "Responsive Design",
            "Dynamic Routing"
        ],
        github: "https://github.com/Bhavesh-0909/personal-portfolio",
        link: "https://bhaveshchoudhary.me/"
    }
]