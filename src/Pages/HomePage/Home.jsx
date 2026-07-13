import React from 'react';
import About from '../About/About';
import GithubSection from '../GithubDetails/GithubSection';
// import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <About></About>
            <GithubSection></GithubSection>
            {/* <Projects></Projects> */}
        </div>
    );
};

export default Home;