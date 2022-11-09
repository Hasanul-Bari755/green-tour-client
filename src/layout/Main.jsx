import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';
import Header from '../pages/Home/Header/Header';

const Main = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;