import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import RecipesPage from "../layouts/RecipesPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";

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
    {
        path: "/recipes/:id",
        element: <RecipesPage />,
        children: [
            {
                path: "/recipes/:id",
                element: <ChefRecipes />,
                loader: async ({ params }) => fetch(`https://chef-recipe-hunter-server-side-topaz.vercel.app/chef-recipe/${params.id}`)
            }
        ]
    }
]);

export default router;