
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
const Nav = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isDark = theme === 'dark';

    const links = [
        { name: '~/home', path: '/' },
        { name: '~/projects', path: '/projects' },
        { name: '~/about', path: '/about' },
        { name: '~/blog', path: '/blog' },
        { name: '~/contact', path: '/contact' },
        { name: '~/reviews', path: '/reviews' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-base-100/20 backdrop-blur-md border-b border-base-300/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 group"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                className="flex"
                            >
                                <GoDotFill className="text-emerald-500 text-2xl" />
                            </motion.span>

                            <span className="font-semibold text-xl tracking-wide whitespace-nowrap transition-colors duration-300 group-hover:text-emerald-300">
                                Md. Asik
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex items-center gap-8">
                            {links.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `group relative py-1 text-sm tracking-wide transition-colors duration-300 ${isActive
                                                ? 'text-emerald-400'
                                                : 'text-base-content/70 hover:text-emerald-300'
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.name}

                                                <span
                                                    className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${isActive
                                                            ? 'w-full'
                                                            : 'w-0 group-hover:w-full'
                                                        }`}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">

                            {/* Theme Toggle */}
                            <button
                                onClick={() =>
                                    setTheme(
                                        isDark ? 'light' : 'dark'
                                    )
                                }
                                className={`relative h-8 w-16 cursor-pointer rounded-full border transition-colors duration-300 ${isDark
                                        ? 'bg-base-300 border-emerald-500'
                                        : 'bg-base-200 border-base-300'
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-base-100 shadow-md flex items-center justify-center transition-all duration-300 ${isDark
                                            ? 'translate-x-8'
                                            : 'translate-x-0.5'
                                        }`}
                                >
                                    {isDark ? (
                                        <HiOutlineMoon className="text-emerald-500 text-sm" />
                                    ) : (
                                        <HiOutlineSun className="text-amber-500 text-sm" />
                                    )}
                                </span>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden"
                            >
                                <HiMenuAlt3 className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${isOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                    }`}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-base-100 backdrop-blur-xl border-l border-base-300 z-50 transition-transform duration-300 ${isOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-base-300">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <GoDotFill className="text-emerald-500 text-2xl" />
                        <span className="font-bold">
                            Md. Asik
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(false)}
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                <ul className="p-6 space-y-5">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-emerald-400'
                                        : 'text-base-content/70 hover:text-emerald-300'
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Nav;

