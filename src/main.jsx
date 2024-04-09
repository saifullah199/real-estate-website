import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UpdateProfile from './Pages/UpdateProfile';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>,

      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/profile',
        element:<UpdateProfile/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
