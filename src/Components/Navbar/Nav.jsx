import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

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
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between gap-4">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 shrink-0 group"
                        >
                            <GoDotFill className="text-2xl text-emerald-500 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                            <span className="font-semibold text-xl tracking-wide leading-none whitespace-nowrap">
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
                                                ? 'text-emerald-500 font-semibold'
                                                : 'text-base-content/70 hover:text-emerald-500'
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.name}
                                                <span
                                                    className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-500 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                        }`}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Right Side */}
                        <div className="flex items-center gap-3 shrink-0">

                            {/* Theme Toggle — sliding pill switch */}
                            <button
                                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                                aria-pressed={isDark}
                                className={`relative h-8 w-16 shrink-0 rounded-full cursor-pointer border transition-colors duration-300 ${isDark
                                    ? 'bg-base-300 border-emerald-500'
                                    : 'bg-base-200 border-base-300'
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-base-100 shadow-md flex items-center justify-center transition-all duration-300 ${isDark ? 'translate-x-8' : 'translate-x-0.5'
                                        }`}
                                >
                                    {isDark ? (
                                        <HiOutlineMoon className="text-sm text-emerald-500" />
                                    ) : (
                                        <HiOutlineSun className="text-sm text-amber-500" />
                                    )}
                                </span>
                            </button>

                            {/* Mobile Menu */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="btn btn-ghost btn-circle lg:hidden"
                                aria-label="Open menu"
                            >
                                <HiMenuAlt3 className="text-xl" />
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
                className={`fixed top-0 right-0 h-screen w-72 bg-base-100 border-l border-base-300 shadow-2xl z-50 transition-transform duration-300 ${isOpen
                    ? 'translate-x-0'
                    : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-base-300">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                        <GoDotFill className="text-3xl text-emerald-500" />
                        <span className="font-bold text-xl">
                            Md. Asik
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="btn btn-ghost btn-circle"
                        aria-label="Close menu"
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                {/* Mobile Links */}
                <ul className="p-6 space-y-5">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block transition-colors duration-300 ${isActive
                                        ? 'text-emerald-500 font-semibold'
                                        : 'text-base-content/70 hover:text-emerald-500'
                                    }`
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