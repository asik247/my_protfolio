import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaLaptopCode,
    FaRocket,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiTailwindcss } from "react-icons/si";

const journeyData = [
    {
        year: "2024",
        title: "Started Programming",
        description:
            "Began learning HTML, CSS, JavaScript and explored the fundamentals of web development.",
        icon: <FaLaptopCode />,
    },
    {
        year: "2025",
        title: "Frontend Development",
        description:
            "Built responsive websites using React, Tailwind CSS, DaisyUI and modern UI practices.",
        icon: <FaReact />,
    },
    {
        year: "2025",
        title: "Backend Development",
        description:
            "Learned Node.js, Express.js, MongoDB and REST API development.",
        icon: <FaNodeJs />,
    },
    {
        year: "2026",
        title: "Full Stack Projects",
        description:
            "Developed complete MERN applications with authentication, dashboards and payment integration.",
        icon: <FaDatabase />,
    },
    {
        year: "2026",
        title: "Current Focus",
        description:
            "Building production-ready applications and preparing for internships and professional opportunities.",
        icon: <FaRocket />,
    },
];

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <'' /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
];

const Journey = () => {
    return (
        <section id="journey" className="mt-32">
            <div className="w-full p-2">
                {/* Header */}
                <div className="mb-16">
                    <p className="uppercase tracking-[0.25em] text-emerald-500 text-sm mb-3 font-semibold">
                        My Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Learning, Building{" "}
                        <span className="bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
                            &amp; Growing
                        </span>
                    </h2>

                    <p className="max-w-2xl text-base-content/70 leading-relaxed">
                        A timeline of my development journey — from writing my first lines
                        of code to building full-stack applications and continuously
                        improving my skills.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Timeline */}
                    <div className="lg:col-span-2 relative">
                        <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-500 via-base-300 to-transparent"></div>

                        <div className="space-y-10">
                            {journeyData.map((item, index) => (
                                <div key={index} className="relative pl-16 group">
                                    {/* Circle */}
                                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-emerald-500 bg-base-100 flex items-center justify-center text-emerald-500 text-lg shadow-md shadow-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110">
                                        {item.icon}
                                    </div>

                                    <div className="border border-base-300 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-emerald-500 font-semibold tracking-wide">
                                                {item.year}
                                            </span>
                                            <span className="text-xs text-base-content/40 font-mono">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mt-1 mb-3">
                                            {item.title}
                                        </h3>

                                        <p className="text-base-content/70 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Side Card */}
                    <div>
                        <div className="sticky top-28 border border-base-300 rounded-3xl p-8 bg-gradient-to-b from-base-100 to-base-200/40 shadow-sm">
                            <p className="uppercase tracking-[0.25em] text-xs text-base-content/50 mb-6 font-semibold">
                                Current Stack
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-base-300 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300"
                                    >
                                        <span className="text-emerald-500">
                                            {skill.icon}
                                        </span>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-base-300">
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Looking Ahead
                                </h4>

                                <p className="text-base-content/70 text-sm leading-relaxed">
                                    My goal is to become a professional MERN Stack Developer and
                                    eventually transition into AI Engineering while continuing to
                                    build impactful products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;