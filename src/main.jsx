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
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Dashboard from './Components/Dashboards/DashboardLayout/Dashboard.jsx';
import AddNewHouse from './Components/Dashboards/HouseWoner/AddNewHouse.jsx';
import OwnerHome from './Components/Dashboards/HouseWoner/OwnerHome.jsx';
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
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'addHouse',
        element:<AddNewHouse></AddNewHouse>
      },
      {
        path:'ownerHome',
        element:<OwnerHome></OwnerHome>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
  </AuthProvider>
 ,
)
