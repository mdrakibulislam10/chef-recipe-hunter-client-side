import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user, loading);
    const location = useLocation();

    if (loading) {
        return <Spinner className='mx-auto d-block my-4' animation="border" variant="warning" />
    }

    if (user) {
        return children;
    }

    return <Navigate to={"/user/login"} state={{ from: location }} replace />
};

export default PrivateRoute;