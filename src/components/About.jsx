import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

export default function About() {
    return (
        <section id="about" className="w-full py-16 px-6 bg-[#1e2230]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">

                {/* Left Side: Image & Info */}
                <div className="flex flex-col flex-1 items-center text-center space-y-4">
                    <div className="rounded-full p-[4px] bg-gradient-to-r from-green-400 to-green-600">
                        <img
                            src="/muthu.jpg"
                            alt="Profile"
                            className="h-40 w-40 md:h-48 md:w-48 object-cover rounded-full"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">Muthu Yogesh</h3>
                    <p className="text-gray-300">Full Stack Developer</p>

                    {/* Social Links */}
                    <div className="flex space-x-6 text-green-400">
                        <a
                            href="https://github.com/MuthuYogesh"
                            aria-label="GitHub"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muthu-yogesh/"
                            aria-label="LinkedIn"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://youtube.com/@TempNext"
                            aria-label="YouTube"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Side: Intro Text */}
                <div className="flex-2 space-y-4 text-gray-200 text-base md:text-lg text-justify">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
                        About Me <span className="text-green-500">✦</span>
                    </h2>
                    <p className="flex items-center justify-center md:justify-start space-x-2">
                        <span className="text-green-500 text-xl font-bold">👋</span>
                        <span className="text-xl font-bold">Hi, I'm Muthu!</span>
                    </p>
                    <p>
                        I’m a passionate Full Stack Developer with hands-on experience in the MERN stack
                        and Python with Flask and SQLite. I love crafting modern web applications — from creating
                        interactive front-end experiences to building secure and scalable back-end systems.
                        My goal is to design solutions that are not only functional but also impactful.
                        I’m constantly learning, experimenting, and pushing my skills to deliver
                        digital products that make a difference.
                    </p>
                </div>
            </div>
        </section>
    )
}
