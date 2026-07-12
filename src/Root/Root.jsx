import React from 'react';
import Nav from '../Components/Navbar/Nav';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='w-full max-w-7xl mx-auto p-4'>
            <Nav></Nav>
             <div>
                <Outlet></Outlet>
             </div>
             <h1>Footer here</h1>
        </div>
    );
};

export default Root;