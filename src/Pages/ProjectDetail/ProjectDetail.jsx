import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router";

const SECTIONS = [
    { id: "overview", label: "Overview", icon: "◉" },
    { id: "problem", label: "The Problem", icon: "⚠" },
    { id: "solution", label: "The Solution", icon: "⚡" },
    { id: "what-i-built", label: "What I Built", icon: "🛠" },
    { id: "tech-stack", label: "Tech Stack", icon: "⚙" },
    { id: "key-features", label: "Key Features", icon: "★" },
    { id: "challenges", label: "Challenges", icon: "⚔" },
    { id: "results", label: "Results & Impact", icon: "📈" },
];

const splitFeature = (text) => {
    const match = text.match(/^(.*?[.!?])\s+(.*)$/s);
    if (!match) return { lead: text, rest: "" };
    return { lead: match[1], rest: match[2] };
};

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const observerRef = useRef(null);

    useEffect(() => {
        axios.get("/projectsData.json").then((res) => {
            const singleProject = res.data.find((item) => item.projectId == id);
            setProject(singleProject);
        });
    }, [id]);

    const availableSections = project
        ? SECTIONS.filter((s) => {
              const val = project[s.id === "results" ? "resultsAndImpact" : s.id === "what-i-built" ? "whatIBuilt" : s.id];
              return Array.isArray(val) ? val.length > 0 : Boolean(val);
          })
        : [];

    useEffect(() => {
        if (!availableSections.length) return;
        observerRef.current?.disconnect();
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
        );
        availableSections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observerRef.current.observe(el);
        });
        return () => observerRef.current?.disconnect();
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex justify-center items-center text-neutral-500 dark:text-white/50 font-mono text-sm">
                loading project…
            </div>
        );
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const sectionHeading = (icon, label) => (
        <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700 dark:text-emerald-400 mb-5 flex items-center gap-3">
            <span className="text-lg">{icon}</span> {label}
        </h2>
    );

    return (
        <div className="w-full border-2 border-red-400 p-2 font-black">
            {/* Top Navigation */}
            <header className='mt-40 font-black leading-none transition-colors'>
                <div className="flex justify-between items-center">
                    <Link
                        to="/#projects"
                        className="group text-neutral-500 dark:text-white/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 font-medium"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> cd ../#projects
                    </Link>
                    <div className="text-[10px] sm:text-xs text-neutral-400 dark:text-white/30 tracking-widest truncate max-w-[45%] text-right font-medium">
                        {project.projectName?.toUpperCase()}
                    </div>
                </div>
            </header>

            {/* Mobile section-jump pills */}
            {availableSections.length > 0 && (
                <div className="lg:hidden sticky top-0 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-sm border-b border-neutral-200 dark:border-white/10 mt-8 mb-4">
                    <div className="flex gap-2 overflow-x-auto px-4 py-3">
                        {availableSections.map((section) => (
                            
                             <a   key={section.id}
                                href={`#${section.id}`}
                                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                    activeSection === section.id
                                        ? "border-emerald-500 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/5"
                                        : "border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-white/50"
                                }`}
                            >
                                <span>{section.icon}</span>
                                {section.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="w-full  grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 lg:gap-16 items-start">
                {/* Main Content */}
                <main className="min-w-0">
                    {/* Title Block */}
                    <section className="mb-12 lg:mb-16 border-b border-neutral-200 dark:border-white/10 pb-8 lg:pb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-4 lg:mb-6">
                            {project.projectName}
                        </h1>
                        <p className="text-neutral-700 dark:text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                            {project.tagline || project.overview}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-5 lg:mt-6 text-sm font-medium text-emerald-700 dark:text-emerald-400/80">
                            <span>{project.role}</span>
                            <span className="text-neutral-300 dark:text-white/30">·</span>
                            <span>{project.duration || project.year}</span>
                        </div>
                    </section>

                    {project.overview && (
                        <section id="overview" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("◉", "Overview")}
                            <p className="text-neutral-800 dark:text-white/70 leading-relaxed text-base sm:text-lg max-w-3xl">
                                {project.overview}
                            </p>
                        </section>
                    )}

                    {project.coverImage && (
                        <div className="mb-16 lg:mb-20 -mx-4 sm:mx-0  rounded-none sm:rounded-2xl border-y sm:border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-2xl">
                            <img
                                src={project.coverImage}
                                alt={project.projectName}
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {project.problem && (
                        <section id="problem" className=" mb-16 lg:mb-20">
                            {sectionHeading("⚠", "The Problem")}
                            <p className="text-neutral-800 dark:text-white/70 leading-relaxed text-base sm:text-lg max-w-3xl">
                                {project.problem}
                            </p>
                        </section>
                    )}

                    {project.solution && (
                        <section id="solution" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("⚡", "The Solution")}
                            <p className="text-neutral-800 dark:text-white/70 leading-relaxed text-base sm:text-lg max-w-3xl">
                                {project.solution}
                            </p>
                        </section>
                    )}

                    {project.whatIBuilt?.length > 0 && (
                        <section id="what-i-built" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("🛠", "What I Built")}
                            <div className="space-y-4 max-w-3xl">
                                {project.whatIBuilt.map((item, i) => (
                                    <p key={i} className="text-neutral-800 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                                        {item}
                                    </p>
                                ))}
                            </div>

                            {project.gallery?.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-10">
                                    {project.gallery.map((img, i) => (
                                        <div
                                            key={i}
                                            className="overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10 group cursor-pointer"
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.projectName} screenshot ${i + 1}`}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}

                    {project.techStack?.length > 0 && (
                        <section id="tech-stack" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("⚙", "Tech Stack")}
                            {Array.isArray(project.techStack) && typeof project.techStack[0] === "object" ? (
                                <div className="space-y-3 max-w-3xl">
                                    {project.techStack.map((group, i) => (
                                        <div
                                            key={i}
                                            className="text-sm sm:text-base leading-relaxed p-4 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10"
                                        >
                                            <span className="text-neutral-900 dark:text-white font-semibold">{group.category}: </span>
                                            <span className="text-neutral-700 dark:text-white/70">{group.items.join(", ")}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 sm:px-5 py-1.5 sm:py-2 bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 rounded-xl text-xs sm:text-sm font-medium text-neutral-800 dark:text-white/80 hover:border-emerald-500/60 dark:hover:border-emerald-400/50 hover:text-emerald-700 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}

                    {project.keyFeatures?.length > 0 && (
                        <section id="key-features" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("★", "Key Features")}
                            <div className="space-y-6 w-full">
                                {project.keyFeatures.map((feature, i) => {
                                    const { lead, rest } = splitFeature(feature);
                                    return (
                                        <div key={i} className="flex gap-4 group">
                                            <span className="text-emerald-700/70 dark:text-emerald-500/70 font-mono text-sm mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors shrink-0 font-semibold">
                                                0{i + 1}
                                            </span>
                                            <p className="text-neutral-800 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                                                <span className="text-neutral-900 dark:text-white font-semibold">{lead}</span>
                                                {rest && <> {rest}</>}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {project.challenges?.length > 0 && (
                        <section id="challenges" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("⚔", "Challenges")}
                            <ul className="space-y-4 w-full">
                                {project.challenges.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-neutral-800 dark:text-white/70 text-sm sm:text-base">
                                        <span className="text-emerald-700 dark:text-emerald-500 mt-1 shrink-0 font-semibold">›</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {project.resultsAndImpact?.length > 0 && (
                        <section id="results" className="scroll-mt-28 mb-16 lg:mb-20">
                            {sectionHeading("📈", "Results & Impact")}
                            <ul className="space-y-4 w-full">
                                {project.resultsAndImpact.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-neutral-800 dark:text-white/70 text-sm sm:text-base">
                                        <span className="text-emerald-700 dark:text-emerald-500 mt-1 shrink-0 font-semibold">›</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {project.metrics && (
                        <section className="mb-16 lg:mb-20">
                            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-700 dark:text-emerald-400 mb-8">
                                Metrics
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/40 dark:hover:border-emerald-400/30 transition-colors"
                                    >
                                        <div className="text-3xl sm:text-5xl font-bold text-emerald-700 dark:text-emerald-400">{value}</div>
                                        <div className="text-neutral-600 dark:text-white/40 text-xs sm:text-sm mt-2 uppercase tracking-widest font-medium">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {project.testimonial?.quote && (
                        <section className="mb-16 lg:mb-20">
                            <div className="border-l-4 border-emerald-500 pl-6 sm:pl-8">
                                <p className="text-lg sm:text-2xl italic text-neutral-900 dark:text-white/80">
                                    “{project.testimonial.quote}”
                                </p>
                                <p className="mt-4 sm:mt-6 text-emerald-700 dark:text-emerald-400 text-sm sm:text-base font-medium">
                                    — {project.testimonial.name}
                                    {project.testimonial.designation && `, ${project.testimonial.designation}`}
                                </p>
                            </div>
                        </section>
                    )}

                    <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-neutral-500 dark:text-white/40 pt-8 border-t border-neutral-200 dark:border-white/10">
                        <span>SHARE:</span>
                        <a href="#" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">LinkedIn</a>
                        <button onClick={handleCopyLink} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                            {copied ? "✓ COPIED" : "COPY LINK"}
                        </button>
                    </div>
                </main>

                {/* Sticky sidebar */}
                <aside className="hidden lg:block">
                    <div className="stacky top-24">
                        <h4 className="uppercase text-xs tracking-[0.2em] font-semibold text-neutral-500 dark:text-white/30 mb-6">
                            On this page
                        </h4>
                        <nav className="space-y-1">
                            {availableSections.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    
                                      <a  key={section.id}
                                        href={`#${section.id}`}
                                        className="group relative flex items-center gap-3 py-2 pl-3 -ml-3"
                                    >
                                        <span
                                            className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 rounded-full transition-all duration-300 ${
                                                isActive
                                                    ? "bg-emerald-600 dark:bg-emerald-400 opacity-100"
                                                    : "bg-neutral-300 dark:bg-white/20 opacity-0 group-hover:opacity-100"
                                            }`}
                                        />
                                        <span
                                            className={`text-base transition-all duration-200 group-hover:translate-x-0.5 ${
                                                isActive
                                                    ? "opacity-100 text-emerald-700 dark:text-emerald-400"
                                                    : "opacity-60 text-neutral-500 dark:text-white/50 group-hover:opacity-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400"
                                            }`}
                                        >
                                            {section.icon}
                                        </span>
                                        <span
                                            className={`text-sm font-medium transition-colors duration-200 ${
                                                isActive
                                                    ? "text-emerald-700 dark:text-emerald-400"
                                                    : "text-neutral-600 dark:text-white/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400"
                                            }`}
                                        >
                                            {section.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ProjectDetails;