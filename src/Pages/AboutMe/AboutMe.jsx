import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageSquare,
    User,
    Calendar,
    MapPin,
    Languages,
    BriefcaseBusiness,
    Rocket,
    Code2,
    Laptop,
    Sparkles,
    X,
    Expand,
} from 'lucide-react';
import myImg from '../../assets/profile.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const AboutMe = () => {
    const info = [
        { label: 'name', value: 'Md Asik', icon: User },
        { label: 'age', value: '20 // born 2005', icon: Calendar }, // TODO: apnar actual age/birth year din
        { label: 'based in', value: 'Dhaka, BD // GMT+6', icon: MapPin },
        { label: 'speaks', value: 'Bangla (native), English (fluent)', icon: Languages },
        { label: 'status', value: 'Open to Internship & Freelance', icon: BriefcaseBusiness },
    ];

    const timeline = [
        {
            year: '2026',
            title: 'Building my portfolio',
            desc: 'Designing and shipping this portfolio with React, Node.js and MongoDB, while sharpening my full MERN stack workflow and preparing to move into AI engineering.',
            icon: Rocket,
        },
        {
            year: '2025',
            title: 'Diving deeper into the MERN stack',
            desc: 'Shipped several full-stack projects end to end, from database design to deployment, and started exploring how AI models can plug into real products.',
            icon: Laptop,
        },
        {
            year: '2024',
            title: 'First real projects',
            desc: 'Built my first full-stack applications with React and Express, learning how the frontend, backend, and database actually talk to each other.',
            icon: Code2,
        },
        {
            year: '2022',
            title: 'First lines of code',
            desc: 'Started learning programming and web development from scratch, curious about how the websites and apps I used every day were actually built.',
            icon: Sparkles,
        },
    ];

    const currently = [
        {
            tag: 'BUILDING',
            title: 'A smarter version of this portfolio',
            desc: 'Experimenting with wiring an AI assistant into my site as a hands-on way to learn how LLMs get integrated into real products.',
        },
        {
            tag: 'READING',
            title: 'Docs & tutorials on system design',
            desc: 'Trying to understand how larger applications are structured before I build my own at that scale.',
        },
        {
            tag: 'LEARNING',
            title: 'The fundamentals behind AI engineering',
            desc: 'Math, Python, and the core ideas behind machine learning models, one step at a time.',
        },
    ];

    const moments = [
        { src: myImg, caption: '~/me/setup.jpg' },
        { src: myImg, caption: '~/me/coding.jpg' },
        { src: myImg, caption: '~/me/coffee.jpg' },
        { src: myImg, caption: '~/me/focus.jpg' },
    ]; // TODO: replace with apnar real photos, import kore array e boshan

    const [lightboxImg, setLightboxImg] = useState(null);

    return (
        <div className="relative">
            {/* ========== HERO / WHOAMI ========== */}
            <section
                id="about"
                className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase">
                        ~/about
                    </p>

                    <h2 className="mt-4 text-5xl md:text-7xl font-black tracking-tight">
                        $ whoami
                    </h2>
                </motion.div>

                <div className="mt-16 grid lg:grid-cols-[1.15fr_1fr] gap-y-14 gap-x-16 items-start">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
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

                        {/* INFO PANEL */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-10 border border-base-300 rounded-2xl overflow-hidden"
                        >
                            {info.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-3 md:gap-4 px-4 md:px-5 py-4 border-b border-l-2 border-l-transparent border-base-300 last:border-b-0 hover:border-l-emerald-500 hover:bg-emerald-500/[0.04] transition-all duration-300"
                                    >
                                        <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                            <Icon size={16} strokeWidth={2} />
                                        </span>
                                        <div className="min-w-0">
                                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                                                {item.label}
                                            </span>
                                            <span className="block text-sm md:text-base font-medium text-base-content truncate">
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative"
                        >
                            <motion.div
                                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute inset-0 bg-emerald-500/25 blur-3xl rounded-full"
                            />

                            <div
                                onClick={() => setLightboxImg(myImg)}
                                className="group relative border border-base-300 rounded-3xl overflow-hidden bg-base-200 cursor-pointer"
                            >
                                <img
                                    src={myImg}
                                    alt="Md Asik"
                                    className="w-full max-w-[380px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center w-11 h-11 rounded-full bg-base-100/90 text-emerald-600">
                                        <Expand size={18} />
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-base-100/80 backdrop-blur border border-base-300">
                                <p className="font-mono text-xs text-emerald-500">
                                    asik@portfolio:~$
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ========== THE LONGER VERSION ========== */}
            <section className="relative max-w-5xl mx-auto px-6 lg:px-10 py-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase"
                >
                    01 THE LONGER VERSION
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-3xl md:text-5xl font-black tracking-tight"
                >
                    A bit about me
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 space-y-6 text-base-content/70 leading-relaxed text-lg"
                >
                    {/* TODO: eikhane apnar real story likhun, ei text ta shudhu placeholder */}
                    <p>
                        I'm a MERN Stack Developer based in Dhaka, currently
                        working on becoming a full-fledged AI Engineer. My
                        journey into web development started when I got
                        curious about how the websites I used every day
                        actually worked behind the scenes, and I haven't
                        stopped building since.
                    </p>
                    <p>
                        I mainly work with React, Node.js, Express and
                        MongoDB, and I care a lot about writing clean,
                        maintainable code rather than just something that
                        works. Understanding the fundamentals, how data
                        flows, how the frontend and backend actually talk to
                        each other, is what makes debugging and building new
                        features so much easier.
                    </p>
                    <p>
                        Lately I've been spending more time exploring AI and
                        machine learning, trying to understand how large
                        language models work and how they can be wired into
                        real products. This portfolio itself is part of that
                        journey.
                    </p>
                </motion.div>
            </section>

            {/* ========== A FEW MOMENTS ========== */}
            <section className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase"
                >
                    02 OFF THE CLOCK
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-3xl md:text-5xl font-black tracking-tight"
                >
                    A few moments
                </motion.h3>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {moments.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="group cursor-pointer"
                            onClick={() => setLightboxImg(m.src)}
                        >
                            <div className="relative border border-base-300 rounded-2xl overflow-hidden bg-base-200 shadow-sm group-hover:shadow-lg group-hover:border-emerald-500/40 transition-all duration-500">
                                <img
                                    src={m.src}
                                    alt={m.caption}
                                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center w-9 h-9 rounded-full bg-base-100/90 text-emerald-600">
                                        <Expand size={15} />
                                    </span>
                                </div>
                            </div>
                            <p className="mt-2 font-mono text-xs text-gray-400 group-hover:text-emerald-500 transition-colors">
                                {m.caption}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ========== HOW I GOT HERE ========== */}
            <section className="relative max-w-5xl mx-auto px-6 lg:px-10 py-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase"
                >
                    03 HOW I GOT HERE
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-3xl md:text-5xl font-black tracking-tight"
                >
                    The short timeline
                </motion.h3>

                <div className="mt-12 relative pl-16 md:pl-20 space-y-14">
                    <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-base-300" />

                    {timeline.map((t, i) => {
                        const Icon = t.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[52px] md:-left-[60px] top-0 flex items-center justify-center w-11 h-11 rounded-full bg-base-100 border border-base-300 text-emerald-500 shadow-sm">
                                    <Icon size={18} strokeWidth={2} />
                                </span>
                                <p className="font-mono text-emerald-500 text-sm">{t.year}</p>
                                <h4 className="mt-1 text-xl md:text-2xl font-bold">
                                    {t.title}
                                </h4>
                                <p className="mt-2 text-base-content/70 leading-relaxed max-w-2xl">
                                    {t.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ========== CURRENTLY ========== */}
            <section className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase"
                >
                    04 RIGHT NOW
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-3xl md:text-5xl font-black tracking-tight"
                >
                    Currently
                </motion.h3>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {currently.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="border border-base-300 rounded-2xl p-6"
                        >
                            <p className="font-mono text-xs tracking-widest text-primary">
                                ▸ {c.tag}
                            </p>
                            <h4 className="mt-3 text-lg font-bold leading-snug">
                                {c.title}
                            </h4>
                            <p className="mt-2 text-sm text-base-content/70 leading-relaxed">
                                {c.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ========== FIND ME ========== */}
            <section className="relative max-w-5xl mx-auto px-6 lg:px-10 py-16 pb-28">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-gray-400 text-sm tracking-[0.3em] uppercase"
                >
                    05 ELSEWHERE
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-3xl md:text-5xl font-black tracking-tight"
                >
                    Find me
                </motion.h3>

                <div className="mt-10 flex flex-wrap gap-4">
                    {/* TODO: nijer real links diye placeholder gula replace korun */}
                    {[
                        { href: 'https://github.com/mdasik', label: 'github/mdasik', Icon: FaGithubSquare, external: true },
                        { href: 'https://linkedin.com/in/mdasik', label: 'linkedin/in/mdasik', Icon: ImLinkedin, external: true },
                        { href: 'mailto:hello@example.com', label: 'hello@example.com', Icon: MdEmail, external: false },
                        { href: '#contact', label: 'contact form', Icon: MessageSquare, external: false },
                    ].map(({ href, label, Icon, external }, i) => (
                        <a
                            key={i}
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noreferrer' : undefined}
                            className="group relative flex items-center gap-2 px-5 py-3 border border-base-300 rounded-xl overflow-hidden transition-colors duration-300 hover:border-emerald-500 hover:text-white"
                        >
                            <span className="absolute inset-0 bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                            <Icon
                                size={18}
                                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6"
                            />
                            <span className="relative z-10 font-mono text-sm">{label}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* ========== LIGHTBOX ========== */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImg(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-3xl w-full"
                        >
                            <img
                                src={lightboxImg}
                                alt="preview"
                                className="w-full max-h-[85vh] object-contain rounded-2xl border border-base-300"
                            />
                            <button
                                onClick={() => setLightboxImg(null)}
                                className="absolute -top-4 -right-4 flex items-center justify-center w-10 h-10 rounded-full bg-base-100 border border-base-300 text-base-content hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutMe;