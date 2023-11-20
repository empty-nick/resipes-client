import { RouteObject } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";
import { Recipe } from "./Recipe";

export const applicationRoutes: RouteObject[] = [
  { path: '/', element: <Home/> },
  { path: '/recipe', element: <Recipe/> },
  { path: '*', element: <Error/> }
]