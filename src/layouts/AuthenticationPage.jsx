import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const AuthenticationPage = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default AuthenticationPage;