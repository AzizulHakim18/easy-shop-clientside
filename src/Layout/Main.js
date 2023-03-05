import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';
import Header from '../Sheared/Header';

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