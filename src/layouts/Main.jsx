import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />

            <Outlet />
        </div>
    );
};

export default Main;