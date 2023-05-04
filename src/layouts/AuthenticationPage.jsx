import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AuthenticationPage = () => {
    return (
        <div>
            <Link to={"/"}><button className='btn btn-warning fw-semibold m-3'>Back To Home Page</button></Link>

            <Outlet />
        </div>
    );
};

export default AuthenticationPage;