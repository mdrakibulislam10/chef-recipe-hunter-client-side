import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "text-info border-bottom border-3 border-info" : "text-black"}
            style={{ textDecoration: "none" }}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;