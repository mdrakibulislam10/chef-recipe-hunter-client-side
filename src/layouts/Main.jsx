import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {

    // const navigation = useNavigation();
    // console.log(navigation);

    return (
        <div>
            <Header />
            {/* {navigation.state === "loading" ? "loading..." : ""} */}

            <Outlet />

            <Footer />
        </div>
    );
};

export default Main;