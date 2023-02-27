import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./Routes/About";
import { Contact } from "./Routes/Contact";
import { ErrorPage } from "./Routes/ErrorPage";
import { HomePage } from "./Routes/HomePage";
import { Projects } from "./Routes/Projects";


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/projects",
        element:<Projects/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      }
    ]
  }
])

export default router