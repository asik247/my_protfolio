import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
const router = createBrowserRouter([
    {
        path: '/', Component: Root,
        children: [
            {index:true,Component:Home},
            
            { path: 'about', Component: About }
        ]
    }

])
export default router