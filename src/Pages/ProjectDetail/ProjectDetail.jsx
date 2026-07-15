import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get("/projectsData.json")
            .then(res => {
                const singleProject = res.data.find(
                    item => item.projectId == id
                );

                setProject(singleProject);
            });
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <p className="text-emerald-400 mb-4">
                {project.year}
            </p>

            <h1 className="text-5xl md:text-8xl font-black mb-8">
                {project.projectName}
            </h1>

            <p className="text-xl text-base-content/70 leading-relaxed max-w-4xl">
                {project.overview}
            </p>
        </section>
    );
};

export default ProjectDetails;