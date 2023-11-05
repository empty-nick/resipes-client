import {RouteObject} from "react-router-dom";
import {Home} from "./Home/Home.tsx";

export const applicationRoutes: RouteObject[] = [
    { path: '/', element: <Home /> }
]