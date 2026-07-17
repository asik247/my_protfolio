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

const Blog = () => {
    return (
        <section className="min-h-screen py-24">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-emerald-500 uppercase tracking-[0.25em] text-sm font-medium mb-3">
                        Writing
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Blog
                    </h1>

                    <p className="max-w-2xl text-lg text-base-content/70 leading-relaxed">
                        Thoughts, tutorials, and lessons learned while building
                        products with React, Node.js, MongoDB, and modern web
                        technologies.
                    </p>
                </div>

                {/* Featured Article */}
                <div className="border border-base-300 rounded-3xl p-8 md:p-12 mb-14 hover:border-emerald-500/40 transition-all duration-300">
                    <span className="text-sm uppercase tracking-widest text-emerald-500">
                        Featured Article
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
                        My Journey to Becoming a MERN Stack Developer
                    </h2>

                    <p className="text-base-content/70 max-w-3xl leading-relaxed">
                        From learning HTML and CSS to building full-stack
                        applications with React, Express, and MongoDB. A look
                        back at my learning process, challenges, and lessons.
                    </p>

                    <button className="btn btn-outline mt-8 rounded-full">
                        Read Article
                    </button>
                </div>

                {/* Articles */}
                <div className="mb-10">
                    <h3 className="text-3xl font-bold mb-8">
                        Latest Articles
                    </h3>

                    <div className="grid gap-6">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="group border border-base-300 rounded-3xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex flex-wrap gap-3 items-center mb-4">
                                    <span className="badge badge-outline">
                                        {post.category}
                                    </span>

                                    <span className="text-sm text-base-content/50">
                                        {post.date}
                                    </span>

                                    <span className="text-sm text-base-content/50">
                                        •
                                    </span>

                                    <span className="text-sm text-base-content/50">
                                        {post.readTime}
                                    </span>
                                </div>

                                <h4 className="text-2xl font-semibold mb-3 group-hover:text-emerald-500 transition-colors">
                                    {post.title}
                                </h4>

                                <p className="text-base-content/70 leading-relaxed mb-5">
                                    {post.description}
                                </p>

                                <Link
                                    className="text-emerald-500 font-medium inline-flex items-center gap-2"
                                >
                                    Read More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-20 border-t border-base-300 pt-10">
                    <p className="text-base-content/50">
                        More articles coming soon. I regularly write about web
                        development, MERN stack projects, and lessons learned
                        while building software.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Blog;