import { RouteObject } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";

export const applicationRoutes: RouteObject[] = [
  { path: '/', element: <Home/> },
  { path: '*', element: <Error/> }
]