import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./Routes/HomePage";
import {ContactPage} from "./Routes/Contacts/ContactPage"
import { Formulaire } from "./Routes/Formulaire";
import { ErrorPage } from "./Routes/ErrorPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/contacts",
        element:<ContactPage/>
      },
      {
        path:"/contacts/:id",
        element:<Formulaire/>
      }
    ]
  }

])

export default router