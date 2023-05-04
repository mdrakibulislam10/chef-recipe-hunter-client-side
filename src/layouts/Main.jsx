import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from "../pages/shared/Footer/Footer";
import { Spinner } from 'react-bootstrap';

const Main = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header />

            {navigation.state === "loading"
                ? <Spinner className='mx-auto d-block my-4' animation="border" variant="warning" />
                : ""}

            <Outlet />

            <Footer />
        </div>
    );
};

export default Main;