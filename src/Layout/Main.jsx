import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Main = () => {

    const location = useLocation();

    const noFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;
    
    return (
        <div>
            <Outlet></Outlet>
            { noFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;