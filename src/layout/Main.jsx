import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';
import Header from '../pages/Home/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;