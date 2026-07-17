import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import {
    Compass,
    AlertTriangle,
    Hammer,
    Layers,
    Sparkles,
    TrendingUp,
} from 'lucide-react';

const SECTIONS = [
    { id: "overview", label: "Overview", icon: Compass },
    { id: "problem", label: "The Problem", icon: AlertTriangle },
    { id: "built", label: "What I Built", icon: Hammer },
    { id: "stack", label: "Tech Stack", icon: Layers },
    { id: "features", label: "Key Features", icon: Sparkles },
    { id: "results", label: "Results & Impact", icon: TrendingUp },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState("overview");
    const observerRef = useRef(null);

    useEffect(() => {
        axios.get("/projectsData.json").then((res) => {
            const singleProject = res.data.find((item) => item.projectId == id);
            setProject(singleProject);
            setLoading(false)
        });
    }, [id]);

    // Scrollspy: highlight the sidebar item matching the section in view
    useEffect(() => {
        if (loading || !project) return;

        const options = {
            rootMargin: "-15% 0px -70% 0px",
            threshold: 0,
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, options);

        SECTIONS.forEach(({ id: sectionId }) => {
            const el = document.getElementById(sectionId);
            if (el) observerRef.current.observe(el);
        });

        return () => observerRef.current && observerRef.current.disconnect();
    }, [loading, project]);

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(sectionId);
        }
    };

    const activeIndex = SECTIONS.findIndex((s) => s.id === active);

    // Instead of just a boolean, we now store WHICH image is open.
    // null = modal closed, otherwise it holds the image src to show.
    const [modalImage, setModalImage] = useState(null);

    const openImage = (src) => setModalImage(src);
    const closeImage = () => setModalImage(null);

    //Todo loading implement;
    if (loading) {
        return <p>loading...</p>
    }
    const galleryImg = project.gallery
    return (
        <div className="w-full p-2 mt-20 md:mt-30 ">
            <div className="grid lg:grid-cols-[1fr_280px] gap-16 items-start">

                {/* Main Content */}
                <main className="min-w-0">
                    {/* Header */}
                    <div className="mt-12">
                        <Link
                            to="/#projects"
                            className="text-sm text-neutral-500 hover:text-emerald-500 transition"
                        >
                            ← Back to Projects
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold mt-4">
                            {project.projectName}
                        </h1>

                        <p className="mt-6 text-lg text-neutral-500 max-w-3xl leading-relaxed">
                            {project.overview}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <span className="badge badge-outline">
                                {project.role}
                            </span>

                            <span className="badge badge-outline">
                                {project.year}
                            </span>

                            <span className="badge badge-outline">
                                {project.duration}
                            </span>

                            <span className="badge badge-success">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Overview */}
                    <section id="overview" className="mt-20  scroll-mt-32">
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>
                        <p className="text-neutral-500 leading-8">
                            {project.overview}
                        </p>
                    </section>
                    {/* Cover */}
                    <div
                        onClick={() => openImage(project.coverImage)}
                        className="relative group cursor-zoom-in mt-14"
                    >
                        <img
                            src={project.coverImage}
                            alt={project.projectName}
                            className="w-full rounded-3xl border border-base-300 transition duration-500"
                        />

                        <div className="absolute inset-0 rounded-3xl bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                Click to enlarge
                            </span>
                        </div>
                    </div>
                    {/* Problem */}
                    <section id="problem" className="mt-24 scroll-mt-32">
                        <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                        <p className="text-neutral-500 leading-8">
                            {project.problem}
                        </p>
                    </section>

                    {/* What I Built */}
                    <section id="built" className="mt-24 scroll-mt-32  ">
                        <h2 className="text-3xl font-bold mb-6">
                            What I Built
                        </h2>

                        <ul className="space-y-4">
                            {project.whatIBuilt.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-neutral-500"
                                >
                                    <span className="text-emerald-500">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    {/* Gallery imgs */}
                    <div className="my-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {galleryImg?.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => openImage(img)}
                                    className="relative group cursor-zoom-in overflow-hidden rounded-xl"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full rounded-xl h-64 md:h-71 object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                            Click to enlarge
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <section id="stack" className="mt-24 scroll-mt-32">
                        <h2 className="text-3xl font-bold mb-6">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full border border-base-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Features */}
                    <section id="features" className="mt-24 scroll-mt-32">
                        <h2 className="text-3xl font-bold mb-6">
                            Key Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {project.keyFeatures.map((feature, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-2xl border border-base-300"
                                >
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Results */}
                    <section
                        id="results"
                        className="mt-24 mb-32 scroll-mt-32"
                    >
                        <div className="mb-10">
                            <p className="uppercase tracking-[0.25em] text-xs text-emerald-500 mb-3">
                                Outcomes
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold">
                                Results & Impact
                            </h2>

                            <p className="mt-4 text-neutral-500 max-w-2xl leading-relaxed">
                                Measurable improvements and key achievements delivered through
                                design, development, and optimization efforts.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {project.resultsAndImpact.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-500/[0.03]"
                                >
                                    {/* Left Accent Line */}
                                    <div className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-emerald-500 transition-all duration-300" />

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                                            <FiTrendingUp size={18} />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <FiCheckCircle className="text-emerald-500" />
                                                <span className="font-medium text-neutral-900 dark:text-white">
                                                    Impact #{i + 1}
                                                </span>
                                            </div>

                                            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-300 transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Sticky Sidebar */}
                <aside className="hidden lg:block self-start w-64 shrink-0">
                    <div className="sticky top-32">
                        <p className="uppercase text-[11px] font-semibold tracking-[0.25em] text-neutral-400 mb-6 pl-11">
                            <span className='text-emerald-500'>## </span> On This Page
                        </p>

                        <nav className="relative flex flex-col">
                            {/* base track */}
                            <div
                                className="absolute left-[15px] top-2 bottom-2 w-px bg-neutral-200"
                                aria-hidden="true"
                            />
                            {/* animated progress fill */}
                            <div
                                className="absolute left-[15px] top-2 w-px bg-emerald-500 transition-all duration-500 ease-out"
                                style={{
                                    height:
                                        activeIndex >= 0
                                            ? `${(activeIndex / (SECTIONS.length - 1)) * 100}%`
                                            : "0%",
                                    maxHeight: "calc(100% - 16px)",
                                }}
                                aria-hidden="true"
                            />

                            {SECTIONS.map(({ id: sectionId, label, icon: Icon }) => {
                                const isActive = active === sectionId;
                                return (
                                    <a
                                        key={sectionId}
                                        href={`#${sectionId}`}
                                        onClick={(e) => handleClick(e, sectionId)}
                                        className="group relative flex items-center gap-4 py-2.5 pl-0"
                                    >
                                        <span
                                            className={[
                                                "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                                                isActive
                                                    ? "border-emerald-500 bg-emerald-500 text-white shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                                                    : "border-neutral-200 bg-white text-neutral-400 group-hover:border-emerald-400 group-hover:text-emerald-500",
                                            ].join(" ")}
                                        >
                                            <Icon size={14} strokeWidth={2.25} />
                                        </span>

                                        <span
                                            className={[
                                                "text-sm transition-colors duration-200",
                                                isActive
                                                    ? "text-neutral-500 font-medium"
                                                    : "text-neutral-500 group-hover:text-emerald-600",
                                            ].join(" ")}
                                        >
                                            {label}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </aside>
            </div>
            {/* modal - shows whichever image (cover or gallery) was clicked */}
            {modalImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
                    onClick={closeImage}
                >
                    <img
                        src={modalImage}
                        alt={project.projectName}
                        className="max-w-[95vw] max-h-[95vh] rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={closeImage}
                        className="absolute top-5 right-5 text-white text-5xl"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;