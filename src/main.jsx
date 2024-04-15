import React from 'react'
import ReactDOM from 'react-dom/client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
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
import EstateDetails from './Pages/EstateDetails';
import PrivateRoute from './Routes/PrivateRoute';
import UserProfile from './Pages/UserProfile';
import ContactUs from './Pages/ContactUs';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/Estates.json')
      },
      {
        path: '/estates/:id',
        element:  <PrivateRoute> <EstateDetails/> </PrivateRoute> ,
        loader: () => fetch('/Estates.json')
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
        element: <PrivateRoute> <UpdateProfile/> </PrivateRoute>
      },
      {
        path: '/userprofile',
        element: <UserProfile/>,
      },
      {
        path: '/contact',
        element: <PrivateRoute> <ContactUs/> </PrivateRoute>
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
