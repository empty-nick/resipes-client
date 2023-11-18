import './App.css'
import {ReactElement} from "react";
import {useRoutes} from "react-router-dom";
import {applicationRoutes} from "../../pages/routes.tsx";
import { Header } from "../Header";

function App(): ReactElement {
  const routes = useRoutes(applicationRoutes)
  return (
    <>
      <Header />
      {routes}
    </>
  )
}

export default App
