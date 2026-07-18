import React from 'react';
import { Link } from 'react-router';

const blogPosts = [
    {
        id: 1,
        title: 'Building a Full-Stack MERN Application',
        description:
            'A deep dive into how I built a scalable MERN application with React, Node.js, Express, and MongoDB.',
        category: 'MERN',
        date: 'July 2026',
        readTime: '5 min read',
    },
    {
        id: 2,
        title: 'Authentication with Firebase Admin & JWT',
        description:
            'Learn how to secure your applications using Firebase Authentication and JWT-based authorization.',
        category: 'Backend',
        date: 'June 2026',
        readTime: '7 min read',
    },
    {
        id: 3,
        title: 'Tailwind CSS Tips for Modern UI Design',
        description:
            'Practical techniques and patterns I use to build responsive and beautiful interfaces quickly.',
        category: 'Frontend',
        date: 'May 2026',
        readTime: '4 min read',
    },
];

// Syntax-style color per category — mirrors how an editor colors tags/keywords
const categoryStyles = {
    MERN: { text: 'text-emerald-600', dot: 'bg-emerald-500', border: 'group-hover:border-emerald-500/40' },
    Backend: { text: 'text-amber-600', dot: 'bg-amber-500', border: 'group-hover:border-amber-500/40' },
    Frontend: { text: 'text-violet-600', dot: 'bg-violet-500', border: 'group-hover:border-violet-500/40' },
};

const Blog = () => {
    return (
        <section className="min-h-screen py-26 md:py-34 ">
            <div className="w-full p-2">

                {/* Editor tab bar — signature element */}
                <div className="flex items-center gap-2 mb-16">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    <span className="ml-4 font-mono text-xs text-gray-500 border-b border-emerald-500 pb-2 -mb-2">
                        blog.jsx
                    </span>
                    <div className="flex-1 border-b border-gray-200 pb-2 -mb-2" />
                </div>

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-baseline gap-3 mb-4">
                        <span className="font-mono text-sm text-gray-400">01</span>
                        <p className="text-emerald-500 uppercase tracking-[0.25em] text-sm font-mono">
                            Writing
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 pl-8">
                        Blog
                        <span className="text-emerald-500 animate-pulse">_</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-gray-600 leading-relaxed pl-8">
                        Thoughts, tutorials, and lessons learned while building
                        products with React, Node.js, MongoDB, and modern web
                        technologies.
                    </p>
                </div>

                {/* Featured Article — git-diff-add styling */}
                <Link
                    to="#"
                    className="group relative block pl-8 mb-16 border-l-2 border-emerald-500 rounded-r-xl "
                >
                    <div className="p-8 md:p-10">
                        <span className="font-mono text-xs uppercase tracking-widest text-emerald-600">
                            + Featured
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5  group-hover:text-emerald-600 transition-colors duration-300">
                            My Journey to Becoming a MERN Stack Developer
                        </h2>

                        <p className="text-gray-600 max-w-3xl leading-relaxed">
                            From learning HTML and CSS to building full-stack
                            applications with React, Express, and MongoDB. A look
                            back at my learning process, challenges, and lessons.
                        </p>

                        <span className="inline-flex items-center gap-2 mt-8 font-mono text-sm group-hover:text-emerald-600 transition-colors">
                            ./read-article
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </div>
                </Link>

                {/* Articles */}
                <div className="mb-10">
                    <h3 className="font-mono text-sm text-gray-400 mb-8">
                        // Latest Articles
                    </h3>

                    <div className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
                        {blogPosts.map((post) => {
                            const style = categoryStyles[post.category];
                            return (
                                <Link
                                    key={post.id}
                                    to={'#'}
                                    className={`group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-7 px-4 -mx-4 rounded-lg border border-transparent transition-all duration-300  ${style.border}`}
                                >
                                    <div className="flex items-center gap-3 md:w-40 shrink-0">
                                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                        <span className={`font-mono text-xs uppercase tracking-wider ${style.text}`}>
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold mb-1.5 group-hover:text-emerald-600 transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                            {post.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 font-mono text-xs text-gray-400 md:w-40 shrink-0 md:justify-end">
                                        <span>{post.date}</span>
                                        <span>·</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <span className="hidden md:block font-mono text-gray-400 group-hover:text-emerald-600 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="font-mono text-sm text-gray-400">
                        // More articles coming soon. I regularly write about web
                        development, MERN stack projects, and lessons learned
                        while building software.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Blog;