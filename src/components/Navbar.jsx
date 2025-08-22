import React, { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false) // close menu on mobile after click
    }

    return (
        <header className="w-full backdrop-blur-md py-4 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <h1 className="text-xl font-bold tracking-wide text-green-500 cursor-default">
                    <span className="text-white">{'<'}</span>
                    MyPortfolio
                    <span className="text-white">{'/>'}</span>
                </h1>

                {/* Desktop Menu */}
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="flex gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/"
                                className="text-sm hover:underline hover:text-green-500 cursor-default"
                            >
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                onClick={() => scrollToSection("about")}
                                className="text-sm hover:underline hover:text-green-500 cursor-default"
                            >
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                onClick={() => scrollToSection("skills")}
                                className="text-sm hover:underline hover:text-green-500 cursor-default"
                            >
                                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                onClick={() => scrollToSection("projects")}
                                className="text-sm hover:underline hover:text-green-500 cursor-default"
                            >
                                Projects
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                onClick={() => scrollToSection("contact")}
                                className="text-sm hover:underline hover:text-green-500 cursor-default"
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Resume Button (desktop only) */}
                <div className="hidden md:block">
                    <Button
                        variant="resume"
                        size="sm"
                        asChild
                    >
                        <a href="/Muthu Yogesh Resume.pdf" download>
                            Resume
                        </a>
                    </Button>

                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-background backdrop-blur-md px-6 py-4 space-y-4">
                    <p
                        onClick={() => scrollToSection("about")}
                        className="text-white hover:text-green-500 cursor-default"
                    >
                        About
                    </p>
                    <p
                        onClick={() => scrollToSection("skills")}
                        className="text-white hover:text-green-500 cursor-default"
                    >
                        Skills
                    </p>
                    <p
                        onClick={() => scrollToSection("projects")}
                        className="text-white hover:text-green-500 cursor-default"
                    >
                        Projects
                    </p>
                    <p
                        onClick={() => scrollToSection("contact")}
                        className="text-white hover:text-green-500 cursor-default"
                    >
                        Contact
                    </p>
                    <Button variant="resume" size="sm" className="w-full" asChild>
                        <a href="/Muthu Yogesh Resume.pdf" download>
                            Resume
                        </a>
                    </Button>
                </div>
            )}
        </header>
    )
}
