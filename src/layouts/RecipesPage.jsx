import React, { useEffect, useRef } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

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

    return (
        <section ref={mapSectionRef}>
            {/* <div ref={mapSectionRef}> */}
            <div>
                <Header />
            </div>

            <Outlet />
        </section>
    );
};

export default RecipesPage;