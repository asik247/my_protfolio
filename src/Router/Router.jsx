import { createBrowserRouter } from "react-router";
// import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
import RootLayout from "../Layouts/RootLayout";
import Projects from "../Pages/Projects/Projects";
import AboutMe from "../Pages/AboutMe/AboutMe";
const router = createBrowserRouter([
    {
        path: '/', Component: RootLayout,
        children: [
            {index:true,Component:Home},
            
            { path: 'about', Component: AboutMe },
            { path: 'projects', Component: Projects }
        ]
    }

])
export default router