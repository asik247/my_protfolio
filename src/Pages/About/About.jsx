import React from 'react';
import { motion } from 'framer-motion';
import { FaGithubSquare, FaArrowRight, FaFolderOpen } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineSparkles } from 'react-icons/hi2';

const questions = [
    { q: 'what is your stack?', a: 'React, Node.js, Express, MongoDB, Firebase & Tailwind CSS.' },
    { q: 'are you available for hire?', a: 'Yes — open to internships, junior roles & freelance work.' },
    { q: 'what are you learning now?', a: 'Deepening AI engineering skills alongside the MERN stack.' },
    { q: 'where are you based?', a: 'Bangladesh · open to remote work worldwide.' },
];

const socials = [
    {
        icon: FaGithubSquare,
        href: 'https://github.com/asik247',
        label: 'GitHub',
    },
    {
        icon: ImLinkedin,
        href: 'https://www.linkedin.com/in/asik5893/',
        label: 'LinkedIn',
    },
    {
        icon: MdEmail,
        href: 'mailto:mdasik855789@gmail.com',
        label: 'Say Hello',
    },
];
const About = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-34 md:pt-24 font-mono">



            <div className="w-full flex-1 ">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-16  p-2 ">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >

                        {/* Available Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs tracking-widest uppercase">
                                <motion.span
                                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="flex"
                                >
                                    <GoDotFill className="text-emerald-500 text-base" />
                                </motion.span>
                                Available ·  Internships,Junior Developer Roles &amp; Freelance Projects
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
                        >
                            <span className="text-emerald-500">$</span>{' '}
                            hi, I'm{' '}
                            <span className="text-emerald-500">Md Asik</span>
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

                        {/* Role */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-lg mt-5 text-base-content/60 tracking-wide"
                        >
                            <span>MERN Stack Developer</span>
                            <span className="text-emerald-500/60">|</span>
                            <span>React Developer</span>
                            <span className="text-emerald-500/60">|</span>
                            <span>Future AI Engineer</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-2xl mt-8 text-sm md:text-base leading-relaxed text-base-content/70 font-sans"
                        >
                            I build <span className="text-emerald-400 font-semibold">modern, scalable web applications</span> using
                            React, Node.js, Express, MongoDB, Firebase and Tailwind CSS. Right now I'm sharpening my skills to grow
                            into an <span className="text-emerald-400 font-semibold">AI Engineer</span>, while continuously
                            shipping <span className="text-emerald-400 font-semibold">real, production-ready projects</span>.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap items-center gap-4 mt-10 text-sm"
                        >
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn btn-success rounded-full px-8 font-mono normal-case group"
                            >
                                get in touch
                                <motion.span
                                    className="flex"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn btn-outline rounded-full px-8 font-mono normal-case group"
                            >
                                <motion.span
                                    className="flex"
                                    whileHover={{ rotate: -12, scale: 1.15 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaFolderOpen />
                                </motion.span>
                                ls projects/
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 md:gap-6 mt-10 text-xs md:text-sm text-base-content/60 w-full"
                        >
                            {socials.map(({ icon: Icon, href, label }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300 break-all"
                                >
                                    <motion.span
                                        className="flex-shrink-0"
                                        whileHover={{ scale: 1.25, rotate: 8 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Icon className="text-lg" />
                                    </motion.span>

                                    <span className="break-all">
                                        {label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side — Terminal Ask-Me Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, -15, 0],
                        }}
                        transition={{
                            opacity: { duration: 0.8 },
                            x: { duration: 0.8 },
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            },
                        }}
                        className="w-full flex-1 mx-auto"
                    >
                        <div className="bg-base-200 border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden">

                            {/* Window Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                                </div>
                                <span className="flex items-center gap-1.5 text-xs text-base-content/40">
                                    <HiOutlineSparkles className="text-emerald-500" />
                                    ~/ask-me.sh
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-base-content/40 mb-1">// system</p>
                                <p className="text-sm text-emerald-400 mb-6">
                                    connected to md-asik.dev — ask anything.
                                </p>

                                <div className="space-y-5">
                                    {questions.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.9 + i * 0.15 }}
                                        >
                                            <p className="text-sm text-base-content/70">
                                                <span className="text-emerald-500 mr-2">?</span>
                                                {item.q}
                                            </p>
                                            <p className="text-sm text-base-content mt-1.5 pl-4 border-l-2 border-emerald-500/30">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Fake input line */}
                                <div className="flex items-center justify-between gap-2 mt-8 pt-4 border-t border-base-content/10 text-sm text-base-content/40 w-full">
                                    <span className="flex items-center gap-2">
                                        <span className="text-emerald-500">›</span>
                                        send a message
                                    </span>
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                        className="text-emerald-500"
                                    >
                                        ↵
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;