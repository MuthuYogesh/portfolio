import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
    { name: "React.js", icon: "/icons/React.png" },
    { name: "Node.js", icon: "/icons/Node.js.png" },
    { name: "Express.js", icon: "/icons/Express.png" },
    { name: "MongoDB", icon: "/icons/MongoDB.png" },
    { name: "Python", icon: "/icons/Python.png" },
    { name: "Flask", icon: "/icons/Flask.png" },
    { name: "SQLite", icon: "/icons/SQLite.png" },
    { name: "Java", icon: "/icons/Java.png" },
    { name: "HTML", icon: "/icons/HTML5.png" },
    { name: "CSS", icon: "/icons/CSS3.png" },
    { name: "JavaScript", icon: "/icons/JavaScript.png" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.png" },
    { name: "C", icon: "/icons/C.png" },
];

export default function Skills() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Check scroll availability
    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        el?.addEventListener("scroll", checkScroll);
        return () => el?.removeEventListener("scroll", checkScroll);
    }, []);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
        }
    };

    return (
        <section id="skills" className="text-center py-16 relative">
            <h2 className="text-3xl font-bold mb-2">Skills ✨</h2>
            <p className="text-muted-foreground mb-8 text-white w-11/12 text-xs mx-auto md:text-lg">
                These are some of the skills I’ve learned and worked with.
            </p>

            {/* Scrollable Container */}
            <div className="relative max-w-full mx-auto">
                {/* Left Fade + Arrow */}
                {canScrollLeft && (
                    <div className="absolute left-0 top-0 h-full w-16 pointer-events-none z-10" />
                )}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full z-20"
                    >
                        <ChevronLeft className="h-6 w-6 text-white" />
                    </button>
                )}

                {/* Skills Cards */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide gap-6 px-6 py-6 sm:px-8 scroll-smooth"
                >
                    {skills.map((skill) => (
                        <Card
                            key={skill.name}
                            className="flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 group hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-xl border border-white/12 bg-white/8 backdrop-blur-md"
                        >
                            <CardContent className="flex flex-col items-center p-6">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform"
                                />
                                <p className="font-medium text-white">{skill.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Right Fade + Arrow */}
                {/* Right Fade */}
                {canScrollRight && (
                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l to-transparent pointer-events-none z-10" />
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full shadow-lg z-20"
                    >
                        <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                )}

            </div>
        </section>
    );
}
