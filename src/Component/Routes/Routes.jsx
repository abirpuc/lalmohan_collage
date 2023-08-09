import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])