import React, { useEffect, useRef } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Footer from "../pages/shared/Footer/Footer";

const RecipesPage = () => {
    const location = useLocation();
    const mapSectionRef = useRef();
    // console.log(location.pathname);

    // after redirect auto scroll to go page top
    useEffect(() => {
        if (location.pathname) {
            window.scrollTo({
                top: mapSectionRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    }, []);

    const navigation = useNavigation();

    return (
        <section ref={mapSectionRef}>
            {/* <div ref={mapSectionRef}> */}

            <Header />
            {navigation.state === "loading"
                ? <Spinner className='mx-auto d-block mt-4 mb-5' animation="border" variant="warning" />
                : ""}

            <Outlet />

            <Footer />
        </section>
    );
};

export default RecipesPage;