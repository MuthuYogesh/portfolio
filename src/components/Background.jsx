import React, { useEffect, useState } from "react";

export default function Background({ children }) {
    const sCircles = [
        { top: "10%", left: "5%" },
        { top: "60%", left: "20%" },
        { top: "30%", right: "15%" },
    ];
    const bCircles = [{ top: "50%", right: "-5%" }];
    const round = [
        { top: "10%", right: "10%" },
        { top: "80%", left: "5%" },
    ];

    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Helper to calculate transform with "slow follow" effect
    const getTransform = (factor) =>
        `translate(${cursor.x * factor}px, ${cursor.y * factor}px)`;

    return (
        <div className="relative w-full bg-bgcolor overflow-hidden">
            {/* Small circles */}
            {sCircles.map((pos, i) => (
                <div
                    key={`s-${i}`}
                    className={`fixed rounded-full bg-green-500 blur-2xl opacity-60 transition-transform duration-500 ease-out
            ${i === 1 || i === 2 ? "hidden md:block" : ""}
          `}
                    style={{
                        ...pos,
                        height: "200px",
                        width: "200px",
                        transform: getTransform(0.01 * (i + 1)), // slow effect
                    }}
                />
            ))}

            {/* Big circles */}
            {bCircles.map((pos, i) => (
                <div
                    key={`b-${i}`}
                    className="fixed rounded-full bg-green-500 blur-2xl opacity-60 hidden sm:block transition-transform duration-700 ease-out"
                    style={{
                        ...pos,
                        height: "400px",
                        width: "400px",
                        transform: getTransform(0.005 * (i + 1)), // even slower
                    }}
                />
            ))}

            {/* Round borders */}
            {round.map((pos, i) => (
                <div
                    key={`r-${i}`}
                    className="fixed rounded-full bg-bgcolor border-4 border-green-500 blur-sm opacity-60 transition-transform duration-500 ease-out"
                    style={{
                        ...pos,
                        height: "80px",
                        width: "80px",
                        transform: getTransform(0.015 * (i + 1)), // a bit faster
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
