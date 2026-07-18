import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { GoDotFill } from "react-icons/go";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Nav = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");

    const navigate = useNavigate();
    const location = useLocation();

    const isDark = theme === "dark";

    const routeLinks = [
        { name: "~/blog", path: "/blog" },
        { name: "~/about", path: "/about" },
        { name: "~/journey", path: "/journey" },
    ];

    useEffect(() => {
        if (location.pathname !== "/") return;

        const handleScroll = () => {
            const sections = ["home", "projects", "contact"];

            const scrollPosition = window.scrollY + 150;

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition <
                    section.offsetTop + section.offsetHeight
                ) {
                    setActive(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const section =
                    document.getElementById(id);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 150);

            return;
        }

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setActive(id);
        setIsOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-base-100/20 backdrop-blur-xl border-b border-base-content/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-20 flex items-center justify-between">

                        {/* Logo */}
                        <button
                            onClick={() =>
                                scrollToSection("home")
                            }
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <motion.span
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex"
                            >
                                <GoDotFill className="text-emerald-500 text-2xl" />
                            </motion.span>

                            <span className="font-semibold text-xl tracking-wide whitespace-nowrap transition-colors duration-300 group-hover:text-emerald-300">
                                Md. Asik
                            </span>
                        </button>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex items-center gap-8">

                            {/* Home */}
                            <li>
                                <button
                                    onClick={() =>
                                        scrollToSection(
                                            "home"
                                        )
                                    }
                                    className={`group relative py-1 text-sm tracking-wide transition-colors duration-300 cursor-pointer ${active === "home" &&
                                        location.pathname === "/"
                                        ? "text-emerald-400"
                                        : "text-base-content/70 hover:text-emerald-300"
                                        }`}
                                >
                                    ~/home

                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${active === "home" &&
                                            location.pathname === "/"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>
                            </li>

                            {/* Projects */}
                            <li>
                                <button
                                    onClick={() =>
                                        scrollToSection(
                                            "projects"
                                        )
                                    }
                                    className={`group relative py-1 text-sm tracking-wide transition-colors duration-300 cursor-pointer ${active ===
                                        "projects" &&
                                        location.pathname ===
                                        "/"
                                        ? "text-emerald-400"
                                        : "text-base-content/70 hover:text-emerald-300"
                                        }`}
                                >
                                    ~/projects

                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${active ===
                                            "projects" &&
                                            location.pathname ===
                                            "/"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>
                            </li>

                            {/* Contact */}
                            <li>
                                <button
                                    onClick={() =>
                                        scrollToSection(
                                            "contact"
                                        )
                                    }
                                    className={`group relative py-1 text-sm tracking-wide transition-colors duration-300 cursor-pointer ${active ===
                                        "contact" &&
                                        location.pathname ===
                                        "/"
                                        ? "text-emerald-400"
                                        : "text-base-content/70 hover:text-emerald-300"
                                        }`}
                                >
                                    ~/contact

                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${active ===
                                            "contact" &&
                                            location.pathname ===
                                            "/"
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>
                            </li>

                            {routeLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({
                                            isActive,
                                        }) =>
                                            `group relative py-1 text-sm tracking-wide transition-colors duration-300 cursor-pointer ${isActive
                                                ? "text-emerald-400"
                                                : "text-base-content/70 hover:text-emerald-300"
                                            }`
                                        }
                                    >
                                        {({
                                            isActive,
                                        }) => (
                                            <>
                                                {
                                                    link.name
                                                }

                                                <span
                                                    className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${isActive
                                                        ? "w-full"
                                                        : "w-0 group-hover:w-full"
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

                            <button
                                onClick={() =>
                                    setTheme(
                                        isDark
                                            ? "light"
                                            : "dark"
                                    )
                                }
                                className={`relative h-8 w-16 cursor-pointer rounded-full border transition-colors duration-300 ${isDark
                                    ? "bg-base-300 border-emerald-500"
                                    : "bg-base-200 border-base-300"
                                    }`}
                            >
                                <span
                                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-base-100 shadow-md flex items-center justify-center transition-all duration-300 ${isDark
                                        ? "translate-x-8"
                                        : "translate-x-0.5"
                                        }`}
                                >
                                    {isDark ? (
                                        <HiOutlineMoon className="text-emerald-500 text-sm" />
                                    ) : (
                                        <HiOutlineSun className="text-amber-500 text-sm" />
                                    )}
                                </span>
                            </button>

                            <button
                                onClick={() =>
                                    setIsOpen(true)
                                }
                                className="lg:hidden cursor-pointer"
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
                className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 cursor-pointer ${isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-72 bg-base-100 backdrop-blur-xl border-l border-base-content/10 z-50 transition-transform duration-300 ${isOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-base-content/10">
                    <button
                        onClick={() =>
                            scrollToSection("home")
                        }
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <GoDotFill className="text-emerald-500 text-2xl" />
                        <span className="font-bold">
                            Md. Asik
                        </span>
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer"
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                <ul className="p-6 space-y-5">

                    <li>
                        <button
                            onClick={() =>
                                scrollToSection("home")
                            }
                            className="text-base-content/70 hover:text-emerald-300 cursor-pointer"
                        >
                            ~/home
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() =>
                                scrollToSection(
                                    "projects"
                                )
                            }
                            className="text-base-content/70 hover:text-emerald-300 cursor-pointer"
                        >
                            ~/projects
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() =>
                                scrollToSection(
                                    "contact"
                                )
                            }
                            className="text-base-content/70 hover:text-emerald-300 cursor-pointer"
                        >
                            ~/contact
                        </button>
                    </li>

                    {routeLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className={({
                                    isActive,
                                }) =>
                                    `cursor-pointer ${isActive
                                        ? "text-emerald-400"
                                        : "text-base-content/70 hover:text-emerald-300"}`
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