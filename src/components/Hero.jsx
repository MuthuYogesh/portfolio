import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Profilepic from './Profilepic'

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false) // close menu on mobile after click
    }

    return (
        <section
            id="home"
            className="h-[calc(100vh-60px)] w-full flex md:flex-row items-center justify-center px-6 md:px-16"
        >
            {/* Left Content */}
            <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 space-y-2 ml-0 md:ml-20">
                <p className="text-greentheme text-lg">Software Developer</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-3">
                    Muthu Yogesh
                </h2>
                <p className="text-lg">Let's Build Your Next</p>
                <p className="text-lg">Successful Product Together</p>

                {/* Buttons */}
                <div className="flex justify-center md:justify-start mt-5 gap-4 flex-wrap">
                    <Button variant="secondary2" onClick={() => scrollToSection("projects")}>View My Projects</Button>
                    <Button variant="outline2" onClick={() => scrollToSection("contact")}>Contact Me</Button>
                </div>
            </div>

            {/* Right Image (Hidden on small screens) */}
            <div className="hidden md:flex items-center justify-center w-1/2">
                <Profilepic prop={"h-64 w-64 md:h-80 md:w-80"} />
            </div>
        </section>
    )
}
