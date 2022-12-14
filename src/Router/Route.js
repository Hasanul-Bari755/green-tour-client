import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import AddServices from "../pages/AddServices/AddServices";
import Allservices from "../pages/Allservices/Allservices";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Home from "../pages/Home/Home/Home";
import Myreviews from "../pages/Myreviews/Myreviews";
import Update from "../pages/Update/Update";
import Servicesdetails from "../ServicesDetails/Servicesdetails";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
               
            },
            {
                path: '/services/:id',
                element: <Servicesdetails></Servicesdetails>,
                loader:({params})=> fetch(`https://green-ture-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path: '/addservices',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/myreviews',
                element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/reviewupdate/:id',
                element: <Update></Update>,
                loader: ({params})=> fetch(`https://green-ture-server.vercel.app/reviewupdate/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }

        ]
        
    }

])