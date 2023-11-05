import './App.css'
import {ReactElement} from "react";
import {useRoutes} from "react-router-dom";
import {applicationRoutes} from "../../pages/routes.tsx";

function App(): ReactElement {
  const routes = useRoutes(applicationRoutes)
  return (
    <>
      {routes}
    </>
  )
}

export default App
