
import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import Main from "../layout/Main/Main.js";
import About from "../pages/About/About.js";
import Home from '../pages/Home/Home.js';
// import About from '../pages/About/About.js';
import Login from "../pages/login/Login.js";
import Signup from "../pages/login/Signup.js";
import ErrorPage from "../pages/shared/ErrorPage.js";




const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,   
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
      ],
    },
  ])
  
  export default router