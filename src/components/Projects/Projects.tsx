"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Bitter Soul",
        description:
            "Coffee & philosophy platform built with Next.js, Express, and Tailwind CSS. Features multilingual support, blog system, and user authentication.",
        tech: ["Next.js", "Tailwind", "Express.js", "MongoDB"],
        github: "https://github.com/ilknur99926/Bitter-Soul.git",
        demo: "https://bitter-soul.netlify.app/",
        image: "/projects/bitter-soul.png",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio built with Next.js and Tailwind CSS. Includes animations, dark/light mode, and responsive design.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com/ilknur/portfolio",
        demo: "https://ilknur-portfolio.vercel.app",
        image: "/projects/portfolio.png",
    },
    {
        title: "E-Commerce Store",
        description:
            "Full-stack e-commerce web app with product filtering, shopping cart, and Stripe integration for payments.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/ilknur/ecommerce-store",
        demo: "#",
        image: "/projects/ecommerce.png",
    },
    {
        title: "Chat App",
        description:
            "Real-time chat application with WebSocket integration, authentication, and message storage.",
        tech: ["React", "Node.js", "Socket.io"],
        github: "https://github.com/ilknur/chat-app",
        demo: "#",
        image: "/projects/chat.png",
    },
    {
        title: "Task Manager",
        description:
            "Task manager app with CRUD operations, categories, and deadline reminders.",
        tech: ["React", "Redux", "Firebase"],
        github: "https://github.com/ilknur/task-manager",
        demo: "#",
        image: "/projects/task.png",
    },
    {
        title: "Weather App",
        description:
            "Weather forecast app fetching real-time data from OpenWeather API, with location-based search.",
        tech: ["React", "API", "Tailwind"],
        github: "https://github.com/ilknur/weather-app",
        demo: "#",
        image: "/projects/weather.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black text-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-violet-400">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/50 transition"
                        >
                            {/* Şəkil */}
                            <div className="relative w-full h-56">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>


                            {/* Məlumat */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Texnologiyalar */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-violet-600/20 text-violet-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Linklər */}
                                <div className="flex gap-6 text-xl">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-violet-400 transition"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-violet-400 transition"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
