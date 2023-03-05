import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';
import Header from '../Sheared/Header';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 z-10'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;