import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/HomePage/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blog from "../Pages/Blog/Blog";
import Reviews from "../Pages/Reviews/Reviews";
import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";
import AllProjects from "../Pages/AllProjects/AllProjects";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutMe },
            { path: "blog", Component: Blog },
            { path: "reviews", Component: Reviews },
             { path: "allProjects", Component: AllProjects },
            { path: "projectDetail/:id", Component: ProjectDetail },
            
        ],
    },
]);

export default router;