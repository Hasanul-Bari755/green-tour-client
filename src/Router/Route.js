import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allservices from "../pages/Allservices/Allservices";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../pages/Home/Header/Header";
import Home from "../pages/Home/Home/Home";
import Servicesdetails from "../ServicesDetails/Servicesdetails";

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
            }
        ]
        
    }

])