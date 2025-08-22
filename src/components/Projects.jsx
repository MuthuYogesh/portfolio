import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern developer portfolio built with React, TailwindCSS, shadcn/ui, and Vite. Features smooth animations, responsive design, SEO optimization, and scalability. Designed to showcase skills, projects, and achievements with a professional UI/UX approach.",
        stack: ["React", "Vite", "TailwindCSS", "shadcn/ui"],
        github: "https://github.com/MuthuYogesh/portfolio",
        webapp: "https://muthuyogesh-portfolio.netlify.app/",
    },
    {
        title: "Recall Notes Extension",
        description:
            "A Chrome extension for fast and seamless note-taking, built with React.js and Flask. It stores user details securely with SQLite, works offline, and offers instant search for saved notes. Designed for efficiency, it integrates smoothly into the browser for quick access anytime.(under Development)",
        stack: ["React", "Chrome Extension API", "Flask", "SQLite", "Graph DS", "LLM"],
        github: "https://github.com/yourusername/recall-notes-extension",
        webapp: "https://chrome.google.com/webstore/detail/recall-notes",
    },
    {
        title: "DevGluck",
        description:
            "A full-stack social media platform built with MERN, Socket.IO, and Redux. Features include real-time chat with unread tracking, live status updates, personalized feeds, post creation with likes/comments, user profiles, follow/unfollow, notifications, and secure JWT authentication.",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "Redux", "framer-motion"],
        github: "https://github.com/MuthuYogesh/DevGluck",
        webapp: "https://dev-gluck-4z7k.vercel.app/",
    },
    {
        title: "Terminal Hive",
        description:
            "Frontend-only social media demo built with React and Redux Toolkit. Includes responsive UI screens for feed, compose post, like/comment buttons, and community pages.",
        stack: ["React", "Local/Session Storage", "Redux"],
        github: "https://github.com/MuthuYogesh/TerminalHive",
        webapp: "https://terminal-hive.netlify.app/",
    },
    {
        title: "URL Shortener",
        description:
            "A MERN app for shortening and managing URLs. Uses Redis caching for fast responses and NanoID for unique link generation. Provides REST APIs.",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Redis", "NanoID"],
        github: "https://github.com/MuthuYogesh/Url-Shortner-a1",
        webapp: "https://url-shortner-a1.vercel.app/",
    },
    {
        title: "Scientific Calculator",
        description:
            "A responsive scientific calculator with React.js supporting both basic and advanced math. Includes history stored in local storage for quick reference.",
        stack: ["React", "LocalStorage"],
        github: "https://github.com/MuthuYogesh/Scientific-calculator-a4",
        webapp: "https://scifi-calc-a4.netlify.app/",
    },
    {
        title: "Weather Dashboard App",
        description:
            "A weather tracker built with React and OpenWeather API. Provides live weather updates, forecasts, and responsive design for smooth usability.",
        stack: ["React", "React-Leaflet", "OpenWeather API"],
        github: "https://github.com/MuthuYogesh/WeatherApp",
        webapp: "https://weather-app-a6.netlify.app/",
    },
    {
        title: "Result Card Generator",
        description:
            "A React-based app that generates student grade reports. Includes dynamic form inputs, marks/grade calculations, and responsive UI. 100% client-side.",
        stack: ["React", "jspdf", "html2canvas"],
        github: "https://github.com/MuthuYogesh/Result-Maker-a3",
        webapp: "https://result-card-generate-a3.netlify.app/",
    },
    {
        title: "Number Guessing Game",
        description:
            "A React-based interactive game with sign-in, real-time hints, and a 60-second timer. Players guess numbers with higher/lower feedback, earn scores based on attempts, and compete on a leaderboard for engagement.",
        stack: ["React"],
        github: "https://github.com/MuthuYogesh/numberGuessGame-a5",
        webapp: "https://numberguessgame-a5.netlify.app/",
    },
];

export default function Projects() {
    const itemsPerPage = 6; // 2 rows × 3 columns
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const [page, setPage] = useState(0);
    const currentProjects = projects.slice(
        page * itemsPerPage,
        (page + 1) * itemsPerPage
    );

    return (
        <section className="py-20 bg-[#1e2230] text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <p className="text-gray-400 mb-12">
                    Some of the projects I have worked on recently.
                </p>

                {/* Animated Grid */}
                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-2"
                        >
                            {currentProjects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-10 gap-3">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setPage(idx)}
                            className={`h-3 w-6 rounded-full transition-all ${page === idx ? "bg-green-500" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const checkScroll = () => {
            setShowLeft(el.scrollLeft > 0);
            setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
        };

        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    return (
        <div id="projects" className="bg-[#2a2f42] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2 flex-1">
                    {project.description}
                </p>

                <div className="relative mt-5">
                    <div
                        ref={scrollRef}
                        className="flex gap-2 overflow-x-auto scrollbar-hide items-center relative z-10"
                    >
                        {project.stack.map((stack, idx) => (
                            <div
                                key={idx}
                                className="text-greentheme border-white/12 bg-white/8 rounded-se-lg rounded-es-lg px-2 py-2 text-xs flex items-center gap-1"
                            >
                                {stack}
                            </div>
                        ))}
                    </div>

                    {/* Left gradient overlay */}
                    {showLeft && (
                        <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-[#2a2f42] to-transparent pointer-events-none z-20" />
                    )}

                    {/* Right gradient overlay */}
                    {showRight && (
                        <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-[#2a2f42] to-transparent pointer-events-none z-20" />
                    )}
                </div>

                {/* Buttons aligned at bottom */}
                <div className="flex gap-2 justify-center mt-5">
                    <Button
                        variant="secondary2"
                        onClick={() => window.open(project.webapp, "_blank", "noopener,noreferrer")}
                    >
                        View Project
                    </Button>
                    <Button
                        variant="outline2"
                        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                    >
                        Git Repo
                    </Button>
                </div>
            </div>
        </div>
    );
}
