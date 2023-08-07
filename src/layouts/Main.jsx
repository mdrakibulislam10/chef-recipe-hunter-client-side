import React, { useEffect } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from "../pages/shared/Footer/Footer";
import { Spinner } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    const navigation = useNavigation();

    useEffect(() => {
        AOS.init();
    });

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