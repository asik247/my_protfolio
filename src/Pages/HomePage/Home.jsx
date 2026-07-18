import React from 'react';
import About from '../About/About';
import GithubSection from '../GithubDetails/GithubSection';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <section id="home" className="scroll-mt-28">
                <About />
            </section>

            <GithubSection />

            <section id="projects" className="scroll-mt-28">
                <Projects />
            </section>

            <section id="contact" className="scroll-mt-28">
                <Contact />
            </section>
        </>
    );
};

export default Home;