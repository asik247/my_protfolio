import React, { useState } from "react";
import {

    MapPin,

    Send,
    CheckCircle,
    User,
    MessageSquare,
    Loader2,
} from "lucide-react";
import { FaGithubSquare } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus("success");

            setForm({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setStatus("idle");
            }, 3000);
        } catch {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="w-full pt-28 md:pt-36 pb-24 p-2 "
        >
            <div className="w-full">
                {/* TOP BORDER */}
                <div className="border-t border-base-300 pt-12">


                    {/* TITLE */}
                    <p className="font-mono text-emerald-500 uppercase tracking-[0.3em] text-sm mb-6">
                        03 <span className="text-gray-400">Get In Touch</span>
                    </p>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* LEFT SIDE */}
                        <div>
                            <h1
                                className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.05em]
              "
                            >
                                Let's build

                                <span className="block text-emerald-500">
                                    something great.
                                </span>
                            </h1>

                            <div className="mt-8">
                                <a
                                    href="mailto:mdasik247@gmail.com"
                                    className="
        group
        inline-flex
        items-center
        gap-3
        text-2xl
        md:text-3xl
        font-semibold
        text-emerald-500
        transition-all
        duration-300
    "
                                >
                                    <span className="border-b border-emerald-500/30 group-hover:border-emerald-500 transition-all">
                                        mdasik855789@gmail.com
                                    </span>

                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </a>

                                <p className="mt-3 text-sm text-base-content/60 font-mono">
                                    Usually replies within 24 hours.
                                </p>
                            </div>


                            {/* INFO */}
                            <div
                                className="
    mt-10
    rounded-3xl
    border
    border-base-300
    bg-base-100/40
    backdrop-blur-sm
    p-5
    font-mono
    text-sm
    transition-all
    duration-500
    hover:border-emerald-500/30
    hover:shadow-[0_0_40px_rgba(16,185,129,0.10)]
"
                            >
                                {/* Location */}
                                <div
                                    className="
        flex
        justify-between
        items-center
        py-3
        border-b
        border-base-300
        transition-all
        duration-300
        hover:translate-x-1
    "
                                >
                                    <span className="text-emerald-500 tracking-wider">
                                        location
                                    </span>

                                    <span className="font-medium">
                                        <span className="text-emerald-500 font-semibold">
                                            Savar
                                        </span>
                                        , Dhaka, BD
                                    </span>
                                </div>

                                {/* Status */}
                                <div
                                    className="
        flex
        justify-between
        items-center
        py-3
        border-b
        border-base-300
        transition-all
        duration-300
        hover:translate-x-1
    "
                                >
                                    <span className="text-emerald-500 tracking-wider">
                                        status
                                    </span>

                                    <span className="inline-flex items-center gap-2">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                                        </span>

                                        Open For Freelance Work
                                    </span>
                                </div>

                                {/* Stack */}
                                <div
                                    className="
        flex
        justify-between
        items-center
        py-3
        transition-all
        duration-300
        hover:translate-x-1
    "
                                >
                                    <span className="text-emerald-500 tracking-wider">
                                        stack
                                    </span>

                                    <span className="text-right">
                                        React • Node • Express •{" "}
                                        <span className="text-emerald-500 font-semibold">
                                            MongoDB
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* SOCIAL */}
                            <div className="mt-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/asik247"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-base-300
            p-4
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:border-emerald-500/30
            hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]
        "
                                    >
                                        <div className="absolute inset-0 bg-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-500">
                                                SOCIAL
                                            </span>

                                            <FaGithubSquare
                                                size={28}
                                                className="
                    mt-3
                    text-emerald-500
                    transition-all
                    duration-300
                    group-hover:scale-105
                "
                                            />

                                            <h3 className="mt-3 text-base font-semibold group-hover:text-emerald-500 transition-colors">
                                                GitHub
                                            </h3>

                                            <p className="mt-1 text-xs text-base-content/60">
                                                Open source projects & contributions.
                                            </p>

                                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-emerald-500">
                                                @asik247 →
                                            </span>
                                        </div>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/in/mdasik"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-base-300
            p-4
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:border-emerald-500/30
            hover:shadow-[0_0_25px_rgba(16,185,129,0.08)]
        "
                                    >
                                        <div className="absolute inset-0 bg-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-500">
                                                SOCIAL
                                            </span>

                                            <ImLinkedin
                                                size={28}
                                                className="
                    mt-3
                    text-emerald-500
                    transition-all
                    duration-300
                    group-hover:scale-105
                "
                                            />

                                            <h3 className="mt-3 text-base font-semibold group-hover:text-emerald-500 transition-colors">
                                                LinkedIn
                                            </h3>

                                            <p className="mt-1 text-xs text-base-content/60">
                                                Professional network & career updates.
                                            </p>

                                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-emerald-500">
                                                Connect →
                                            </span>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="
    relative
    rounded-[32px]
    border
    border-base-300
    bg-base-100/80
    backdrop-blur-xl
    p-8
    md:p-10
    shadow-xl
    hover:border-emerald-500
    transition-all
    duration-500
"
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <span className="text-emerald-500 text-sm font-medium tracking-wider uppercase">
                                    Contact Form
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                                    Let's work together.
                                </h2>

                                <p className="text-base-content/60 mt-3 leading-relaxed">
                                    Have a project idea, freelance opportunity, or just want
                                    to say hello? <span className="text-emerald-500">Drop me a message.</span>
                                </p>
                            </div>

                            <div className="space-y-5">

                                {/* NAME */}
                                <div className="relative">
                                    <User
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                       className="
w-full
pl-12
pr-4
py-4
rounded-2xl
border
border-base-300
bg-base-100
resize-none
outline-none
transition-all
duration-300

hover:border-emerald-500/30
focus:border-emerald-500
focus:ring-1
focus:ring-emerald-500
"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="relative">
                                    <MdEmail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="
w-full
pl-12
pr-4
py-4
rounded-2xl
border
border-base-300
bg-base-100
resize-none
outline-none
transition-all
duration-300

hover:border-emerald-500/30
focus:border-emerald-500
focus:ring-1
focus:ring-emerald-500
"
                                    />
                                </div>

                                {/* MESSAGE */}
                                <div className="relative">
                                    <MessageSquare
                                        size={18}
                                        className="absolute left-4 top-5 text-emerald-500"
                                    />

                                    <textarea
                                        rows="6"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="
w-full
pl-12
pr-4
py-4
rounded-2xl
border
border-base-300
bg-base-100
resize-none
outline-none
transition-all
duration-300

hover:border-emerald-500/30
focus:border-emerald-500
focus:ring-1
focus:ring-emerald-500
"
                                    />
                                </div>

                                {/* BUTTON */}
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="
    group
    relative
    overflow-hidden
    w-full
    py-4
    rounded-2xl
    bg-emerald-500
    text-black
    font-bold
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-[0_0_30px_rgba(16,185,129,0.30)]
    hover:bg-emerald-400
    active:scale-[0.98]
    disabled:opacity-50
    disabled:cursor-not-allowed cursor-pointer
"
                                >
                                    {/* Hover Background */}
                                    <span
                                        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-white/20
        via-transparent
        to-white/20
        -translate-x-full
        group-hover:translate-x-full
        transition-transform
        duration-1000
    "
                                    />

                                    {status === "sending" && (
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending...
                                        </span>
                                    )}

                                    {status === "success" && (
                                        <span className="relative z-10 flex items-center gap-2">
                                            <CheckCircle size={18} />
                                            Message Sent
                                        </span>
                                    )}

                                    {status === "idle" && (
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Send
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                            Send Message
                                        </span>
                                    )}

                                    {status === "error" && (
                                        <span className="relative z-10">
                                            Try Again
                                        </span>
                                    )}
                                </button>

                                <p className="text-center text-sm text-base-content/50">
                                    Usually replies within 24 hours.
                                </p>

                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;