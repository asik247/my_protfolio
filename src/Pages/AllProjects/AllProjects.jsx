import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await axios.get("/projectsData.json");
                setProjects(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProjects();
    }, []);
    return (
        <div className='mt-20'>
            <h1>All Projects here {projects.length}</h1>
        </div>
    );
};

export default AllProjects;