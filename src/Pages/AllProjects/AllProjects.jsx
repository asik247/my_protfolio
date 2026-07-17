import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const AllProjects = () => {
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

    return (
        <div className='w-full mt-30 mb-32 p-2 border-2 border-red-500'>
            <p className='text-gray-400'>~ / projects ·  {projects.length} entries</p>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight my-4"
            >
                <span className="text-gray-400">$</span>{' '}
                ls -al{' '}
                <span className="text-emerald-500"> ~/projects</span>
                <motion.span
                    animate={{
                        opacity: [1, 0, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                    }}
                    className="text-emerald-500 ml-2 font-light"
                >
                    ▋
                </motion.span>
            </motion.h1>

            <p className="mt-6 text-neutral-500 max-w-2xl leading-relaxed">
                An archive of my work, featuring web applications, tools, and creative
                experiments. Every project reflects a step in my growth as a developer.
            </p>

            {/* Directory listing style header, mirrors the "ls -al" theme above */}
            <div className="hidden md:grid grid-cols-[24px_70px_1fr_180px_140px] gap-6 mt-14 px-5 pb-3 border-b border-neutral-200 dark:border-white/10 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                <span></span>
                <span>Year</span>
                <span>Project</span>
                <span>Role</span>
                <span>Duration</span>
            </div>

            <div className="flex flex-col divide-y divide-neutral-200 dark:divide-white/10">
                {projects.map((project) => (
                    <Link
                        key={project.projectId}
                        to={`/projectDetail/${project.projectId}`}
                        className="group grid grid-cols-1 md:grid-cols-[24px_70px_1fr_180px_140px] gap-2 md:gap-6 items-center py-6 px-5 -mx-5 rounded-xl transition-all duration-300  hover:px-6"
                    >
                        <span className="text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <FaArrowRight size={14} />
                        </span>

                        <span className="text-sm text-neutral-400 font-mono">
                            {project.year}
                        </span>

                        <div className="min-w-0">
                            <h2 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-emerald-500 transition-colors duration-300">
                                {project.projectName}
                            </h2>
                            <p className="mt-1 text-sm text-neutral-500 line-clamp-1 max-w-xl">
                                {project.overview}
                            </p>
                        </div>

                        <span className="text-sm text-neutral-500">
                            {project.role}
                        </span>

                        <span className="text-sm text-emerald-500 font-mono">
                            {project.duration}
                        </span>
                    </Link>
                ))}
            </div>

            {projects.length === 0 && (
                <p className="mt-14 text-neutral-400 font-mono text-sm">
                    // no entries found
                </p>
            )}
        </div>
    );
};

export default AllProjects;