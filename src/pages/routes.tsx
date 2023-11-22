import { RouteObject } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";
import { Recipe } from "./Recipe";
import { FullRecipe } from "./FullRecipe";

export const applicationRoutes: RouteObject[] = [
  { path: '/', element: <Home/> },
  { path: '/recipe', element: <Recipe/> },
  { path: '/recipe/:id', element: <FullRecipe /> },
  { path: '*', element: <Error/> }
]