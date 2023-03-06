import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import MyOrders from "../Pages/CheckOuts/MyOrders";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import CartSection from "../Pages/MyCart/CartSection";
import LogIn from "../Register/LogIn";
import Registration from "../Register/Registration";
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/mycart",
                element: <PrivateRoutes><CartSection></CartSection></PrivateRoutes>
            },
            {
                path: "/myorders",
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },

        ]
    }
])