import axios from "axios";
import { a } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await axios.get("/projectsData.json");
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProjects();
    }, []);

    const featuredProjects = projects
        .filter((project) => project.featured)
        .slice(0, 3);

    return (
        <section
            id="projects"
            className="w-full p-2"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-base-300 pb-8 mb-12">
                <div>
                    <p className="text-emerald-400 font-mono text-sm mb-4 tracking-wider">
                        02 <span className="text-base-content/50">FEATURED WORK</span>
                    </p>

                    <h2 className="text-3xl md:text-5xl font-black leading-none">
                        Selected

                        Projects
                    </h2>
                </div>

                <div className="mt-6 md:mt-0 text-sm font-mono text-base-content/40">
                    ~/projects/featured
                    <br />
                    {featuredProjects.length} of {projects.length} visible
                </div>
            </div>

            {/* Projects — responsive grid: 1 col mobile, 3 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                    <Link
                        key={project.projectId}
                        to={`/projectDetail/${project.projectId}`}
                        className="group relative flex flex-col justify-between border border-base-300 rounded-2xl p-6 md:p-8 bg-base-100/40 hover:border-emerald-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-400/5 transition-all duration-300 ease-out overflow-hidden"
                    >
                        {/* subtle glow on hover */}
                        <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/0 group-hover:bg-emerald-400/10 rounded-full blur-3xl transition-all duration-500" />

                        <div className="relative">
                            {/* Number + year */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-emerald-400 text-lg font-mono">
                                    (0{index + 1})
                                </span>
                                <span className="text-base-content/40 font-mono text-xs px-2 py-1 border border-base-300 rounded-full">
                                    {project.year}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight transition-colors duration-300 group-hover:text-emerald-400">
                                {project.projectName}
                            </h3>

                            {/* Overview */}
                            <p className="text-base-content/60 leading-relaxed text-sm md:text-base line-clamp-3">
                                {project.overview}
                            </p>
                        </div>

                        {/* Footer meta */}
                        <div className="relative flex items-center justify-between  mt-8 pt-4 border-t border-base-300">
                            <p className="font-semibold text-base-content/80 text-sm">
                                {project.role}
                            </p>

                            {project.liveLink ? (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        e.stopPropagation();
                                        window.open(project.liveLink, "_blank", "noopener,noreferrer");
                                    }}
                                    className="flex items-center gap-1 cursor-pointer text-emerald-400 font-mono text-sm hover:underline underline-offset-4"
                                >
                                    ↗ live
                                </button>
                            ) : (
                                <span className="flex items-center gap-1 text-emerald-400 font-mono text-sm transition-all duration-300 group-hover:gap-2">
                                    view
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer / view all */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-base-300 pt-10 mt-16">
                <p className="font-mono text-sm text-base-content/40">
                    $ ls -al /projects//{" "}
                    <span className="text-base-content/60">
                        list all projects
                    </span>
                </p>

                <Link
                    to={'/allProjects'}
                    className="group inline-flex items-center gap-2 font-mono text-sm text-base-content border border-base-300 rounded-full px-6 py-3 hover:border-emerald-400/60 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all duration-300"
                >
                    view all projects
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default Projects;