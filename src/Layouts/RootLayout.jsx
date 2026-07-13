import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useMotionTemplate,
    useTransform,
} from 'framer-motion';
import Nav from '../Components/Navbar/Nav';
import Foot from '../Components/Footer/Foot';

const BootIntro = ({ onDone }) => {
    useEffect(() => {
        const timer = setTimeout(onDone, 1400);
        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[999] bg-base-100 flex items-center justify-center font-mono"
        >
            <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center text-4xl md:text-6xl font-bold text-emerald-500 hover:text-emerald-300 hover:font-extrabold transition-all duration-300"
            >
                <span>$</span>
                <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                        times: [0, 0.5, 0.5, 1],
                    }}
                    className="inline-block w-[0.5em] h-[0.9em] bg-current ml-3 rounded-sm"
                />
            </motion.div>
        </motion.div>
    );
};

const RootLayout = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            theme
        );

        localStorage.setItem('theme', theme);
    }, [theme]);

    // cursor position — drives the "lit up stars" spotlight
    const mvX = useMotionValue(-500);
    const mvY = useMotionValue(-500);
    const springX = useSpring(mvX, { stiffness: 60, damping: 20, mass: 0.5 });
    const springY = useSpring(mvY, { stiffness: 60, damping: 20, mass: 0.5 });

    // scroll position — drives a subtle parallax on the ambient glow
    const scrollY = useMotionValue(0);
    const glowShift = useTransform(scrollY, [0, 1000], [0, 120]);

    useEffect(() => {
        const onMouseMove = (e) => {
            mvX.set(e.clientX);
            mvY.set(e.clientY);
        };
        const onScroll = () => scrollY.set(window.scrollY);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll', onScroll);
        };
    }, [mvX, mvY, scrollY]);

    const spotlightMask = useMotionTemplate`radial-gradient(260px circle at ${springX}px ${springY}px, black, transparent 70%)`;

    return (
        <>
            <AnimatePresence>
                {!booted && <BootIntro onDone={() => setBooted(true)} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: booted ? 1 : 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative min-h-screen flex flex-col overflow-hidden"
            >
                {/* Full-site animated background — minimal, single accent glow + reactive starfield */}
                <div className="fixed inset-0 -z-10 bg-base-100 overflow-hidden">
                    {/* dim base dot grid — the "unlit" stars */}
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                'radial-gradient(currentColor 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                            color: 'var(--fallback-bc, currentColor)',
                        }}
                    />

                    {/* bright dot grid, only revealed near the cursor — the "lit up" stars */}
                    <motion.div
                        className="absolute inset-0 text-emerald-400 pointer-events-none"
                        style={{
                            backgroundImage:
                                'radial-gradient(currentColor 1.5px, transparent 1.5px)',
                            backgroundSize: '28px 28px',
                            opacity:1,
                            WebkitMaskImage: spotlightMask,
                            maskImage: spotlightMask,
                        }}
                    />

                    {/* single slow-breathing accent glow, shifts gently on scroll */}
                    <motion.div
                        animate={{
                            opacity: [0.15, 0.3, 0.15],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ y: glowShift }}
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-emerald-500/10 rounded-full blur-[120px]"
                    />

                    {/* soft vignette so edges stay dark/clean */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-100/60" />
                </div>

                <Nav
                    theme={theme}
                    setTheme={setTheme}
                />

                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </main>

                <Foot />
            </motion.div>
        </>
    );
};

export default RootLayout;