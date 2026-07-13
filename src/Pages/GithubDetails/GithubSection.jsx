import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {GitHubCalendar} from 'react-github-calendar';
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiVercel,
} from 'react-icons/si';

const techStack = [
    { name: 'react', icon: SiReact, color: '#61DAFB' },
    { name: 'next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'javascript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'typescript', icon: SiTypescript, color: '#3178C6' },
    { name: 'node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'mongodb', icon: SiMongodb, color: '#47A248' },
    { name: 'firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'tailwindcss', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'git', icon: SiGit, color: '#F05032' },
    { name: 'github', icon: SiGithub, color: '#FFFFFF' },
    { name: 'vercel', icon: SiVercel, color: '#FFFFFF' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const TerminalHeader = ({ path }) => (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-base-300/70">
        <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        <span className="ml-3 font-mono text-xs text-base-content/50 truncate">
            {path}
        </span>
    </div>
);

const GithubSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative py-16 md:py-24"
        >
            <div className="relative w-full p-2">

                {/* Header */}
                <motion.div variants={fadeUp} className="mb-12 md:mb-16">
                    <span className="font-mono  text-gray-400  text-xs md:text-sm">
                        $ cd ~/github/activity
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
                        <span className="text-emerald-500">$</span>{' '}
                        GitHub{' '}
                        <span className="text-emerald-500">Activity</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base-content/70 text-base md:text-lg leading-relaxed">
                        Tracking <span className="text-emerald-500">contributions</span>,{' '}
                        <span className="text-emerald-500">repositories</span>,{' '}
                        <span className="text-emerald-500">commits</span> and continuous
                        development across the{' '}
                        <span className="font-semibold text-emerald-500">
                            JavaScript ecosystem
                        </span>
                        .
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left column */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Contribution graph */}
                        {/* <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden"
                        >
                            <TerminalHeader path="~/github/contributions --last-year" />

                            <div className="p-4 sm:p-6">
                               
                                <div className="w-full overflow-x-auto">
                                    <img
                                        src="https://ghchart.rshah.org/asik247"
                                        alt="GitHub Contribution Graph"
                                        className="min-w-[600px] sm:min-w-0 w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </motion.div> */}
                        {/* update version */}
                        

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden"
                        >
                            <TerminalHeader path="~/github/contributions --last-year" />

                            <div className="p-4 sm:p-6">
                                <div className="w-full overflow-x-auto">
                                    <div className="min-w-[800px]">
                                        <GitHubCalendar
                                            username="asik247"
                                            fontSize={14}
                                            blockSize={14}
                                            blockMargin={5}
                                            colorScheme="light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* GitHub stats */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden"
                        >
                            <TerminalHeader path="~/github/stats --user asik247" />

                            <div className="p-4 sm:p-6">
                                <img
                                    src="https://github-readme-activity-graph.vercel.app/graph?username=asik247&theme=github-compact"
                                    alt="Contribution Graph"
                                    className="w-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Profile */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden"
                        >
                            <TerminalHeader path="~/whoami" />

                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <FaGithub className="text-2xl" />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="font-bold text-lg sm:text-xl truncate">
                                            @asik247
                                        </h3>
                                        <p className="font-mono text-xs sm:text-sm text-base-content/50 truncate">
                                            MERN Stack Developer
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://github.com/asik247"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary w-full"
                                >
                                    Visit GitHub
                                    <FaArrowUpRightFromSquare />
                                </a>
                            </div>
                        </motion.div>

                        {/* Tech stack */}
                        <motion.div
                            variants={fadeUp}
                            className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden"
                        >
                            <TerminalHeader path="~/stack --list" />

                            <div className="p-6">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
                                    {techStack.map(({ name, icon: Icon, color }, index) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.04 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-base-300 bg-base-100 font-mono text-xs sm:text-sm cursor-default overflow-hidden"
                                            title={name}
                                        >
                                            <Icon
                                                className="text-base shrink-0"
                                                style={{ color }}
                                            />
                                            <span className="truncate">{name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default GithubSection;