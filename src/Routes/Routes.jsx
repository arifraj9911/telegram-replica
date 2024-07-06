import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";

export const router = createBrowserRouter([
    {
        element:<Main></Main>,
        path:'/',
        children:[
            {
                element:<Home></Home>,
                path:'/home'
            },
            {
                element:<About></About>,
                path:'/about'
            }
        ]

    }
])