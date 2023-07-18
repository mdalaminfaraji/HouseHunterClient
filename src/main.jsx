import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Components/pages/Home/Home.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {  path:"/",
      element:<Home></Home>
    },
    {
      path:"/register",
      element:<Registration></Registration>

    },{
      path:"/login",
      element:<Login></Login>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
