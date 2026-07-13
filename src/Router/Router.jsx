import { createBrowserRouter } from "react-router";
// import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
import RootLayout from "../Layouts/RootLayout";
import Projects from "../Pages/Projects/Projects";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Reviews from "../Pages/Reviews/Reviews";
const router = createBrowserRouter([
    {
        path: '/', Component: RootLayout,
        children: [
            {index:true,Component:Home},
            { path: 'projects', Component: Projects },
            { path: 'about', Component: AboutMe },
            { path: 'blog', Component: Blog },
            { path: 'contact', Component: Contact },
            { path: 'reviews', Component: Reviews },
        ]
    }

])
export default router