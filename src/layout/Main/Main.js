import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer.js';
import Navbar from '../../pages/shared/Navbar.js';

const Main = () => {
    return (
        <div>
              <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer/>
          
        </div>
      
    );
};

export default Main;