import {RouteObject} from "react-router-dom";
import {Home} from "./Home/Home.tsx";
import { Error } from "./Error";

export const applicationRoutes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '*', element: <Error /> }
]