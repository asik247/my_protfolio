import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/HomePage/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blog from "../Pages/Blog/Blog";
import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Journey from "../Pages/Journey/Journey";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutMe },
            { path: "blog", Component: Blog },
            { path: "journey", Component: Journey },
             { path: "allProjects", Component: AllProjects },
            { path: "projectDetail/:id", Component: ProjectDetail },
            
        ],
    },
]);

export default router;