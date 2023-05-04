import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import RecipesPage from "../layouts/RecipesPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import AuthenticationPage from "../layouts/AuthenticationPage";
import Login from "../pages/AuthenticationContainer/Login/Login";
import SignUp from "../pages/AuthenticationContainer/SignUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Navigate to={"/home"} replace={true} />
            },
            {
                path: "/home",
                element: <Home />,
                loader: async () => fetch("https://chef-recipe-hunter-server-side-topaz.vercel.app/chef-recipe"),
            },
            {
                path: "/blog",
                element: <Blog />
            },
        ]
    },
    {
        path: "/recipes/:id",
        element: <RecipesPage />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/recipes/:id",
                element: <PrivateRoute> <ChefRecipes /> </PrivateRoute>,
                loader: async ({ params }) => fetch(`https://chef-recipe-hunter-server-side-topaz.vercel.app/chef-recipe/${params.id}`)
            }
        ]
    },
    {
        path: "/user",
        element: <AuthenticationPage />,
        children: [
            {
                path: "/user",
                element: <Navigate to={"/user/login"} replace={true} />
            },
            {
                path: "/user/login",
                element: <Login />,
            },
            {
                path: "/user/sign-up",
                element: <SignUp />
            }
        ]
    }
]);

export default router;