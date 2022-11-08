import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import AddServices from "../pages/AddServices/AddServices";
import Allservices from "../pages/Allservices/Allservices";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Home from "../pages/Home/Home/Home";
import Servicesdetails from "../ServicesDetails/Servicesdetails";
import Signup from "../Signup/Signup";

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
                loader: ()=> fetch('http://localhost:5000/servicesall')
            },
            {
                path: '/services/:id',
                element: <Servicesdetails></Servicesdetails>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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
                element:<AddServices></AddServices>
            }
        ]
        
    }

])