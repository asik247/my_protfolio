import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Navbar/Nav';
import Foot from '../Components/Footer/Foot';

const RootLayout = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            theme
        );

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="min-h-screen flex flex-col">
            <Nav
                theme={theme}
                setTheme={setTheme}
            />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Outlet />
            </main>

            <Foot />
        </div>
    );
};

export default RootLayout;