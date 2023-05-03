import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => fetch("https://chef-recipe-hunter-server-side-topaz.vercel.app/chef-recipe"),
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    },
]);

export default router;