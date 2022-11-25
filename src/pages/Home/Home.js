import React from 'react';
import AboutFerniture from '../../components/AboutFerniture.js';

import Banner from '../../components/Banner.js';
import Features from '../../components/Features.js';
import Footer from '../shared/Footer/Footer.js';
import CardHome from './CardHome.js';
// import Contact from '../Contact.js';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Features/>
           <AboutFerniture/>
           <CardHome/>
           <Footer/>
           {/* <Contact/> */}
        </div>
    );
};

export default Home;