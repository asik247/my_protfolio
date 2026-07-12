import { createBrowserRouter } from "react-router";
import About from "../Pages/About/About";
import Home from "../Pages/HomePage/Home";
import RootLayout from "../Layouts/RootLayout";
const router = createBrowserRouter([
    {
        path: '/', Component: RootLayout,
        children: [
            {index:true,Component:Home},
            
            { path: 'about', Component: About }
        ]
    }

])
export default router