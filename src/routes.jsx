import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Projects } from "./Pages/Projects/Projects";
import { Home } from "./Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutMe/>
      },
      {
        path: "/projects",
        element: <Projects/>
      }
    ]
  }
])