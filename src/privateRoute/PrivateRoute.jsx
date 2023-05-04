import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user, loading);


    return (
        <div>
            jkjkjk
        </div>
    );
};

export default PrivateRoute;