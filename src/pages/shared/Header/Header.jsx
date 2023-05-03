import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import { Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <Navbar bg="" variant="" className='d-flex justify-content-around align-items-center'>
                <h1 onClick={() => navigate("/")} className='text-warning fw-bold' style={{ cursor: "pointer" }}>Recipe Haven</h1>

                <Nav className="d-flex gap-5 align-items-center">
                    <ActiveLink to={"/"}>Home</ActiveLink>
                    <ActiveLink to={"/blog"}>Blog</ActiveLink>

                    <Image src="holder.js/171x180" roundedCircle />
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;